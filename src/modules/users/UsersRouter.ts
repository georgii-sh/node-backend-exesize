import Router from 'koa-router';
import { createUser } from './UsersController'
import { validateCreateUser } from './UsersValidators'

const router = new Router({
  prefix: '/users'
});

router.post('/', validateCreateUser, createUser);

export default router