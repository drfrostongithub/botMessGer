const express = require('express');
const { bottender } = require('bottender');
const fs = require('fs')
const app = bottender({
    dev: process.env.NODE_ENV !== 'production',
});

const port = Number(process.env.PORT) || 4040;

// the request handler of the bottender app
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    const verify = (req, _, buf) => {
        req.rawBody = buf.toString();
    };
    server.set(`view engine`, 'ejs')
    server.use(express.json({ verify }));
    server.use(express.urlencoded({ extended: true }));

    // your custom route
    server.get('/api', (req, res) => {
        res.json({ ok: true });
    });

    // server.get('/', (req, res) => {
    //     res.json('Main');
    // });

    server.get('/message', (req, res) => {
        fs.readFile(`./record.json`, `utf8`, (err, data) => {
            if (err) { res.send(err) }
            else {
                data = JSON.parse(data)
                res.render(`message`, { data })
            }
        })
    });

    server.get('/view', (req, res) => {
        res.render('message')
    });

    // route for webhook request
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});