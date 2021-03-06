import nodemailer, { Transporter } from "nodemailer";

import IMailProvider from "../IMailProvider";

export default class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    nodemailer
      .createTestAccount()
      .then((account) => {
        const transporter = nodemailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass,
          },
        });

        this.client = transporter;
      })
      .catch((err) => console.error(err));
  }

  public async sendMail(
    to: string,
    subject: string,
    body: string
  ): Promise<void> {
    const message = await this.client.sendMail({
      to,
      from: "Ignite <noreply@ignite.com.br>",
      subject,
      text: body,
      html: body,
    });

    console.log(`Message sent: ${message.messageId}`);
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(message)}`);
  }
}
