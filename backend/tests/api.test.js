const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {
  it('Login success', async () => {
    const res = await request(app).post('/login').send({ email: 'user@example.com', password: 'Password123!' });
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it('Login failure', async () => {
    const res = await request(app).post('/login').send({ email: 'bad', password: 'wrong' });
    expect(res.status).toBe(401);
  });

  it('Create item', async () => {
    const res = await request(app).post('/items').send({ text: 'Test Item' });
    expect(res.status).toBe(201);
  });
});
