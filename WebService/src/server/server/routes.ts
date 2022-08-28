import * as fs from 'fs';
import * as koaBody from 'koa-body';
import * as Router from 'koa-router';
// import * as Mailgun from 'mailgun-js';
// import * as path from 'path';


import { DaprClient } from "@dapr/dapr";

const daprHost = "localhost"; // Dapr Sidecar Host
const daprPort = `${process.env.DAPR_HTTP_PORT || 3501}`; // Dapr Sidecar Port

const client = new DaprClient(daprHost, daprPort);

const router = new Router();

// const apiKey = process.env.APPSETTINGS_API_KEY; // long guid from mailgun
// const domain = process.env.APPSETTINGS_DOMAIN; // eg 'mg.priou.co.uk';
// const prayerRequestFromEmail = process.env.APPSETTINGS_PRAYER_REQUEST_FROM_EMAIL;
// const prayerRequestRecipientEmail = process.env.APPSETTINGS_PRAYER_REQUEST_RECIPIENT_EMAIL;

function readFileAsPromise(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) { reject(err); }
            else {
                resolve(data.toString());
            }
        });
    });
}

// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
router.post('/api/PrayerRequest', koaBody(), async (ctx, next) => {
    // Invokes the method to send emails given the above data with the helper library
    try {
        const { email, prayFor } = ctx.request.body;
        if (ctx.request.body.email) {
            // Send a message
            const sent = await client.pubsub.publish(
                /* pubSubName */ "mailer-pub-sub",
                /* topic */ "prayer-requests",
                /* data */ {
                    email, prayFor
                });

            if (!sent) throw new Error('Failed to publish prayer request');

            ctx.body = { ok: true, text: 'Thanks for sending your prayer request - we will pray.' };
        }
/*
        if (!apiKey || !domain) {
            throw new Error('APPSETTINGS_API_KEY and / or APPSETTINGS_DOMAIN not configured');
        }

        if (!prayerRequestFromEmail || !prayerRequestRecipientEmail) {
            throw new Error('APPSETTINGS_PRAYER_REQUEST_FROM_EMAIL and / or APPSETTINGS_PRAYER_REQUEST_RECIPIENT_EMAIL not configured');
        }

        // We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
        const mailgun = new Mailgun({ apiKey, domain });

        const prayerRequest = {
            from: prayerRequestFromEmail,
            to: prayerRequestRecipientEmail,
            subject: 'Please could you pray for me',
            text: `Hi,

I'd love it if you could pray for me about this:

${prayFor}`
        };
        await mailgun.messages().send(prayerRequest);

        const text = await readFileAsPromise(path.join(__dirname, 'prayerResponse.txt'));
        const html = await readFileAsPromise(path.join(__dirname, 'prayerResponse.html'));
        const reassuringResponse = {
            from: prayerRequestFromEmail,
            to: email,
            subject: 'Your prayer request',
            text,
            html
        };
        await mailgun.messages().send(reassuringResponse);

        ctx.body = { ok: true, text: 'Thanks for sending your prayer request - we will pray.' };
        */
    } catch (exc) {
        console.error(exc instanceof Error ? exc.message : exc);

        ctx.body = {
            success: false,
            text: `Your prayer request has not been sent - there was a problem`
        };
    }
});

export const routes = router.routes();
