import http from 'http';
import Koa from 'koa';

async function processErrorMiddleware(ctx: Koa.Context, next: Koa.Next) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { error: err.message };
    ctx.app.emit('error', err, ctx);
  }
};

export default processErrorMiddleware