import Koa from 'koa';

import Joi from 'joi'
import BadRequestError from 'commons/errors/BadRequestError';

export async function validateCreateUser(ctx: Koa.Context, next: Koa.Next) {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  });

  const { body } = ctx.request
  const { error } = schema.validate(body)

  if (error) {
    throw new BadRequestError(error.message)
  }

  await next()
}

