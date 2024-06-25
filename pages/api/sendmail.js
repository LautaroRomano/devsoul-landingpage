import { Resend } from 'resend';

export default function handler(req, res) {
  if (req.method === 'POST') {
    post(req, res)
  } else {
    res.status(401).json({ success: false });
  }
}

const post = async (req, res) => {
  try {
    const { email, name, message } = req.body

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'devsoul256@gmail.com',
      subject: 'Nuevo mensaje',
      html: `<p>
      <strong>Email: </strong>${email}<br/>
      <strong>nombre: </strong>${name}<br/>
      <strong>mensaje:</strong>${message}<br/>
      </p>`
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.log("🚀 ~ post ~ error:", error)
    return res.status(401).json({ success: false });
  }

}