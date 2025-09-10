import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name = 'Portofolio Contact Form', email = 'no-email-provided-@example.com', message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const toEmail = process.env.RECEIVER_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    const subject = `Portofolio Website - New Contact Form Submission from ${name}`;
    const text = `You have a new message from ${name} (${email}):\n\n${message}`;

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      text,
      reply_to: email,
    });

    return NextResponse.json({ success: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

