import Koa from 'koa';
import Router from '@koa/router';
import koaBody from 'koa-body';

import { DaprClient } from "dapr-client";

const daprHost = "localhost"; // Dapr Sidecar Host
const daprPort = `${process.env.DAPR_HTTP_PORT || 3501}`; // Dapr Sidecar Port

const client = new DaprClient(daprHost, daprPort);

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
    try {
        await next()
        const status = ctx.status || 404;
        if (status === 404) ctx.throw(404);
    } catch (err: any) {
        ctx.status = err.status || 500;
        ctx.body = (ctx.status === 404) ? 'not found alas' : `hmmm: ${ctx.status}`;
    }
})

const formHtml = (header: string) => `<!DOCTYPE html>
<html>
<head>
<title>Email me!</title>
</head>
<body>
<form method="post">
    <h1>${header}</h1>
    <label for="email">Enter your email:</label>
    <input type="email" id="email" name="email" required>
    <button type="submit">Submit</button>
</form>
</body>
</html>
`;

router.get('/', async (ctx, next) => {
    ctx.body = formHtml("We'd like to email you")
});

router.post('/', koaBody(), async (ctx, next) => {
    try {
        if (ctx.request.body.email) {
            // Send a message
            const sent = await client.pubsub.publish(
                /* pubSubName */ "mailer-pub-sub",
                /* topic */ "prayer-requests",
                /* data */ {
                    email: ctx.request.body.email
                });

            ctx.body = formHtml(`Message sent: ${sent}`);
        } else {
            ctx.body = formHtml("No email supplied");
        }
    } catch (exc) {
        console.error('Problem calling weather service', exc)
        ctx.body = 'Something went wrong!'
    }
});

app
    .use(router.routes())
    .use(router.allowedMethods());

const portNumber = 3000;
app.listen(portNumber);
console.log(`listening on port ${portNumber}`);
