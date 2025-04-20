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
  attachments?: any[];
}) {
  return transporter.sendMail({
    from: process.env.MAIL_FROM || 'recruit@example.com',
    ...options,
  });
}

export async function POST(request: NextRequest) {
  try {
    // multipart/form-dataを処理するためのFormDataオブジェクトを作成
    const formData = await request.formData();
    
    // フォームデータから各フィールドを取得
    const position = formData.get('position')?.toString() || '';
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    const file = formData.get('file-upload') as File | null;
    
    // バリデーション
    if (!name || !email || !position) {
      return NextResponse.json(
        { success: false, message: '必須項目が入力されていません' },
        { status: 400 }
      );
    }
    
    // 添付ファイル処理
    const attachments = [];
    if (file && file.size > 0) {
      // ファイルバッファの取得
      const buffer = Buffer.from(await file.arrayBuffer());
      
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }
    
    // メール送信処理を実行
    try {
      await sendEmail({
        to: process.env.RECRUIT_EMAIL || 'recruit@example.com',
        subject: `採用応募: ${position}`,
        text: `
          希望職種: ${position}
          名前: ${name}
          メール: ${email}
          メッセージ: ${message || 'なし'}
        `,
        html: `
          <h2>採用応募がありました</h2>
          <p><strong>希望職種:</strong> ${position}</p>
          <p><strong>名前:</strong> ${name}</p>
          <p><strong>メール:</strong> ${email}</p>
          <p><strong>メッセージ:</strong> ${message ? message.replace(/\n/g, '<br>') : 'なし'}</p>
        `,
        attachments: attachments
      });
      
      // 自動返信メール
      await sendEmail({
        to: email,
        subject: '採用応募を受け付けました',
        text: `
          ${name} 様
          
          採用応募いただきありがとうございます。
          以下の内容で応募を受け付けました。
          書類選考の結果は1週間以内にご連絡いたします。
          
          ■応募内容
          希望職種: ${position}
          
          ※このメールは自動送信されています。
          このメールに返信されてもお答えできませんのでご了承ください。
        `,
        html: `
          <p>${name} 様</p>
          <p>採用応募いただきありがとうございます。<br>
          以下の内容で応募を受け付けました。<br>
          書類選考の結果は1週間以内にご連絡いたします。</p>
          
          <h3>応募内容</h3>
          <p><strong>希望職種:</strong> ${position}</p>
          
          <p><small>※このメールは自動送信されています。<br>
          このメールに返信されてもお答えできませんのでご了承ください。</small></p>
        `,
      });
      
      return NextResponse.json({ 
        success: true, 
        message: '応募ありがとうございます。書類選考の結果は1週間以内にご連絡いたします。' 
      });
      
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { success: false, message: 'メールの送信に失敗しました。後ほど再度お試しください。' },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Careers form error:', error);
    return NextResponse.json(
      { success: false, message: 'エラーが発生しました。後ほど再度お試しください。' },
      { status: 500 }
    );
  }
} 