import http from 'http';
import Koa from 'koa';
import Router from 'koa-router';

const router = new Router({
  prefix: '/users',
});



export default router