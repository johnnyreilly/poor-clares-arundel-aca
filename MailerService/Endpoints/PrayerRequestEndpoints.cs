using Config;

using Microsoft.Extensions.Options;

using RestSharp;
using RestSharp.Authenticators;

using Dapr;

namespace MailerService.Endpoints;

public static class PrayerRequestEndpoints
{
    public record SendPrayerRequestBody(string? Email, string? PrayFor);

    public static IEndpointRouteBuilder MapPrayerRequestEndpoints(this IEndpointRouteBuilder endpoints)
    {
        endpoints.MapPost("/SendPrayerRequest", // the URL isn't actually used directly
            // Dapr subscription in [Topic] routes prayer-requests topic to this route
            [Topic("mailer-pub-sub", "prayer-requests")]
            async (
                SendPrayerRequestBody body,
                ILogger<SendPrayerRequestBody> logger,
                IOptions<MailConfig> options
            ) =>
            {
                try
                {
                    if (string.IsNullOrEmpty(body.Email)) throw new Exception("Email required");
                    if (string.IsNullOrEmpty(body.PrayFor)) throw new Exception("PrayFor required");

/*
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
*/

                    await SendSimpleMessage(
                        mailgunApiKey: options.Value.MailgunApiKey,
                        toEmailAddress: body.Email,
                        subject: "Please could you pray for me",
                        text: @$"Hi,

I'd love it if you could pray for me about this:

{body.PrayFor}"
);

                    await SendSimpleMessage(
                        mailgunApiKey: options.Value.MailgunApiKey,
                        toEmailAddress: body.Email,
                        subject: "Your prayer request",
                        text: ReassuringResponseTextEMail,
                        html: ReassuringResponseHTMLEMail
                    );

                    return Results.Ok($"We have mailed {body.Email})");
                }
                catch (Exception exc)
                {
                    logger.LogError(exc, $"Problem!");

                    return Results.BadRequest(exc.Message);
                }
            });

        return endpoints;
    }

    static async Task<RestResponse> SendSimpleMessage(
        string mailgunApiKey, 
        string toEmailAddress, 
        string subject, 
        string text, 
        string? html = null
    )
    {
        RestClient client = new(new RestClientOptions
        {
            BaseUrl = new Uri("https://api.mailgun.net/v3")
        })
        {
            Authenticator =
            new HttpBasicAuthenticator("api", mailgunApiKey)
        };
        RestRequest request = new();
        request.AddParameter("domain", "mg.priou.co.uk", ParameterType.UrlSegment);
        request.Resource = "{domain}/messages";
        request.AddParameter("from", "John Reilly <johnny_reilly@hotmail.com>");
        request.AddParameter("to", toEmailAddress);
        request.AddParameter("subject", subject);
        request.AddParameter("text", text);
        if (html != null) request.AddParameter("html", html);

        return await client.PostAsync(request);
    }

    private const string ReassuringResponseTextEMail = @"Thank you for your prayer request.

You are in our thoughts and prayers.

Your Poor Clare sisters, Arundel.";

    private const string ReassuringResponseHTMLEMail = @"<html>
<head>
    <title>Thank you for your prayer request.</title>
</head>
<body>
    <div>
        <img src=""https://www.poorclaresarundel.org/images/main/SanDamianoCrucifix.jpg"" />
    </div>
    <div style=""padding:10px;font-family: Verdana, Helvetica, Sans-Serif;"">
        <p>Thank you for your prayer request.</p>

        <p>You are in our thoughts and prayers.</p>

        <p>Your Poor Clare sisters, Arundel.</p>
    </div>
</body>
</html>
";

}
