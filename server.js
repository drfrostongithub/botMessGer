const express = require('express');
const { bottender } = require('bottender');
const fs = require('fs')
const app = bottender({
    dev: process.env.NODE_ENV !== 'production',
});

const port = Number(process.env.PORT) || 4040;
const server = express();

// the request handler of the bottender app
const handle = app.getRequestHandler();

app.prepare().then(() => {

    const verify = (req, _, buf) => {
        req.rawBody = buf.toString();
    };
    server.set(`view engine`, 'ejs')
    server.use(express.json({ verify }));
    server.use(express.urlencoded({ extended: true }));

    // // your custom route
    // server.get('/api', (req, res) => {
    //     res.json({ ok: true });
    // });

    server.get('/', (req, res) => {
        res.json('go for /messages');
    });

    // View All
    server.get('/messages', (req, res) => {
        fs.readFile(`./record.json`, `utf8`, (err, data) => {
            if (err) { res.send(err) }
            else {
                data = JSON.parse(data)
                res.render(`messages`, { data })
            }
        })
    });

    // View By ID
    server.get('/messages/:id', (req, res) => {
        fs.readFile(`./record.json`, `utf8`, (err, data) => {
            if (err) { res.send(err) }
            else {
                // console.log('masuk gan')
                let id = req.params.id
                data = JSON.parse(data)
                let result = data.filter((el) => {
                    if (el.id == +id) {
                        return el
                    }
                })
                data = result
                res.render(`view`, { data })
            }
        })
    })

    // Delete By ID
    server.delete('/messages/:id/delete', (req, res) => {
        let deleteId = +req.params.id
        fs.readFile(`./record.json`, `utf8`, (err, data) => {
            if (err) { res.send(err) }
            else {
                data = JSON.parse(data)
                let result = data.filter(el => {
                    if (el.id != deleteId) {
                        return el
                    }
                })
                let dataStr = JSON.stringify(result, null, 2)
                fs.writeFile(`./record.json`, dataStr, (err) => {
                    if (err) { res.send(err) }
                    else {
                        // res.status(200)
                        res.redirect(`/messages`)
                    }
                })

            }
        })
    });

    // route for webhook request
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}/messages`);
    });
});

// uncomment this for test
// module.exports = server