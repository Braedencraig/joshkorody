import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { email, name, message, subject } = await request.json();
    resend.emails.send({
      from: email,
      to: "joshkorody@gmail.com",
      subject: `Message from ${name} (${email}): Subject: ${subject}`,
      html: `<p>${message}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
