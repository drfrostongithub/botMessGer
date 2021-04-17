const App = require('.');
const server = require('../server')
const request = require('supertest')
let id

describe('index.js', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });
});
describe(`====All messages===`, () => {
  test('All messages', (done) => {
    request(server)
      .get(`/messages`)
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).toBe(200)
          expect(res.error).toBeFalsy()
          done()
        }
      })
  })
})
describe('===Delete 1 Message===', () => {
  test('Delete 1 Message', (done) => {
    request(server)
      .delete(`/messages/${id}/delete`)
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          // console.log(res.status)
          // expect(res.status).toBe(200)
          console.log(res)
          expect(res.redirect).toBeTruthy()
          expect(res.error).toBeFalsy()
          done()
        }
      })
  })
})
