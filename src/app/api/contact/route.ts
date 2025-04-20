import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// トランスポーター設定
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || 'smtp.example.com',
  port: Number(process.env.MAIL_PORT) || 587,
  secure: process.env.MAIL_SECURE === 'true',
  auth: {
    user: process.env.MAIL_USER || 'user@example.com',
    pass: process.env.MAIL_PASSWORD || 'password',
  },
});

// メール送信関数
async function sendEmail(options: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) {
  return transporter.sendMail({
    from: process.env.MAIL_FROM || 'contact@example.com',
    ...options,
  });
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // バリデーション
    const { company, name, email, phone, subject, message, consent } = data;
    
    if (!name || !email || !subject || !message || !consent) {
      return NextResponse.json(
        { success: false, message: '必須項目が入力されていません' },
        { status: 400 }
      );
    }
    
    // メール送信処理を実行
    try {
      await sendEmail({
        to: process.env.CONTACT_EMAIL || 'contact@example.com',
        subject: `お問い合わせ: ${subject}`,
        text: `
          会社名: ${company || 'なし'}
          名前: ${name}
          メール: ${email}
          電話: ${phone || 'なし'}
          件名: ${subject}
          メッセージ: ${message}
        `,
        html: `
          <h2>お問い合わせがありました</h2>
          <p><strong>会社名:</strong> ${company || 'なし'}</p>
          <p><strong>名前:</strong> ${name}</p>
          <p><strong>メール:</strong> ${email}</p>
          <p><strong>電話:</strong> ${phone || 'なし'}</p>
          <p><strong>件名:</strong> ${subject}</p>
          <p><strong>メッセージ:</strong> ${message.replace(/\n/g, '<br>')}</p>
        `,
      });
      
      // 自動返信メール（オプション）
      if (email) {
        await sendEmail({
          to: email,
          subject: 'お問い合わせありがとうございます',
          text: `
            ${name} 様
            
            お問い合わせいただきありがとうございます。
            以下の内容でお問い合わせを受け付けました。
            担当者より2営業日以内にご連絡いたします。
            
            ■お問い合わせ内容
            件名: ${subject}
            メッセージ: ${message}
            
            ※このメールは自動送信されています。
            このメールに返信されてもお答えできませんのでご了承ください。
          `,
          html: `
            <p>${name} 様</p>
            <p>お問い合わせいただきありがとうございます。<br>
            以下の内容でお問い合わせを受け付けました。<br>
            担当者より2営業日以内にご連絡いたします。</p>
            
            <h3>お問い合わせ内容</h3>
            <p><strong>件名:</strong> ${subject}</p>
            <p><strong>メッセージ:</strong><br> ${message.replace(/\n/g, '<br>')}</p>
            
            <p><small>※このメールは自動送信されています。<br>
            このメールに返信されてもお答えできませんのでご了承ください。</small></p>
          `,
        });
      }
      
      return NextResponse.json({ 
        success: true, 
        message: 'お問い合わせありがとうございます。担当者からご連絡いたします。' 
      });
      
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { success: false, message: 'メールの送信に失敗しました。後ほど再度お試しください。' },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'エラーが発生しました。後ほど再度お試しください。' },
      { status: 500 }
    );
  }
} 