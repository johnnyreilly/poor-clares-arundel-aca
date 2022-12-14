namespace Config;

public class MailConfig
{
    public string MailgunApiKey { get; set; } = string.Empty;
    public string EmailDomain { get; set; } = string.Empty;
    public string ConventEmailAddress { get; set; } = string.Empty;
    public string NoReplyEmailAddress { get; set; } = string.Empty;
}