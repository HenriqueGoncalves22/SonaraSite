import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export default async (req: Request) => {
    
if(req.method !== 'POST'){
  return new Response(
    JSON.stringify({error: "Método não permitido"}),
    {status: 405, headers:{"Content-Type":"application/json"}}
  );
}
const { name, email, subject, message} = await req.json();

const {error} = await transporter.sendMail({
  from: process.env.GMAIL_USER,
  to: process.env.GMAIL_USER,
  replyTo: email,
  subject: subject,
  html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #f5f5f5; ">
            <div style="background-color: #5b21b6; color: white; padding: 25px; border-radius: 12px 12px 0 0;">
                <h1 style="margin: 0; font-weight=400">
                Nova mensagem — Sonara
                </h1>
            </div>
            <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px;">
                <h2 style="color: #5b21b6; font-size: 24px">
                    ${subject}
                </h2>
                <p style="font-size: 16px; margin-top:8px"><strong>Nome:</strong>
                 ${name} 
                 </p>
                <p style="font-size: 16px;"><strong>E-mail:</strong>
                 ${email}
                 </p>
                <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0; ">
                <h3 style="font-size:20px">
                Mensagem
                </h3>
                <p style="line-height: 1.6; font-size: 16px;"> 
                ${message} 
                </p>
            </div>
            <p style="text-align: center; color: #777; font-size: 14px; margin-top: 20px;">
                Mensagem enviada através do formulário de contato da Sonara.
            </p>
        </div>`,});

  if(error) {
    console.error(error);
    return new Response(
      JSON.stringify({error: "Não foi possível enviar o email"}),
      {status: 500, headers:{"Content-Type":"application/json"}}
    );
  }

}

