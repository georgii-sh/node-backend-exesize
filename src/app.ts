import http from 'http';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser'
import processErrorMiddleware from 'middlewares/processErrorMiddleware'
import healthCheckRouter from 'modules/healthcheck/HealthCheckRouter'
import usersRouter from 'modules/users/UsersRouter'

const app = new Koa();

app.use(bodyParser());
app.use(processErrorMiddleware);

app
.use(healthCheckRouter.routes())
.use(healthCheckRouter.allowedMethods())
.use(usersRouter.routes())
.use(usersRouter.allowedMethods())

const server = http.createServer(app.callback());

export default server