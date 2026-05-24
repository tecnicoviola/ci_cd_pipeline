const request = require('supertest');
const app = require('./app');

describe('API Endpoints', () => {
  it('GET / should return hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello from CI/CD Demo App!');
  });

  it('GET /health should return status OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'OK');
  });
});
