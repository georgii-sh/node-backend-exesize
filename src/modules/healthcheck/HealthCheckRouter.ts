import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

router.get('/healthcheck', (ctx: Koa.Context, next: Koa.Next) => (ctx.body = 'OK'));

export default router