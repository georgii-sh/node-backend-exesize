import supertest from 'supertest';

import app from '../../app'

describe('healthcheck route', () => {
  it('should return OK', async () => {
    await supertest(app).get('/healthcheck').expect(200, 'OK');
  });
});

