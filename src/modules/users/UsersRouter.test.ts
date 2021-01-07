import supertest from 'supertest';
import knex from 'db/knex'

import app from '../../app'

describe('Users routes', () => {
  it('should return 400 error if body is empty', async () => {
    await supertest(app).post('/users').send({}).expect(400);
  });

  it('should return 400 error if email is empty', async () => {
    await supertest(app).post('/users').send({
      name: 'Test user'
    }).expect(400, {"error": '"email" is required'});
  });

  it('should return 400 error if email is not an email', async () => {
    await supertest(app).post('/users').send({
      name: 'Test user',
      email: 'wrongemail'
    }).expect(400, {"error": '"email" must be a valid email'});
  });

  describe('success', () => {
    beforeEach(async () => {
      await knex.migrate.rollback()
      await knex.migrate.latest()
      await knex.seed.run()
    })
    afterEach(async () => await knex.migrate.rollback())
    afterAll(async () => {
      await knex.destroy()
    })

    it('should return 200 and created user', async () => {
      await supertest(app).post('/users').send({
        name: 'Test user',
        email: 'nice@email.com'
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.email).toEqual('nice@email.com')
        expect(body.name).toEqual('Test user')
      });
    });
  })
})
