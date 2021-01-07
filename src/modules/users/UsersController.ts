import Koa from 'koa';
import UsersService from 'modules/users/UsersService'

export async function createUser(ctx: Koa.Context, next: Koa.Next) {
  const { body } = ctx.request
  const created = await UsersService.createUser(body)
  ctx.body = created
}