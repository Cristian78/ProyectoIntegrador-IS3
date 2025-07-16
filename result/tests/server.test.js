const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('deberia responder 200 y contener "Cats vs Dogs -- Result"', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('Cats vs Dogs -- Result');
    })
})