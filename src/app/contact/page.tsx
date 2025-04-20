'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'お名前は必須項目です';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須項目です';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'お問い合わせ内容は必須項目です';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ詳細は必須項目です';
    }
    
    if (!formData.consent) {
      newErrors.consent = 'プライバシーポリシーに同意してください';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          setSubmitSuccess(true);
        } else {
          throw new Error(data.message || 'エラーが発生しました');
        }
      } catch (error) {
        console.error('エラー:', error);
        setErrors({
          ...errors,
          form: typeof error === 'string' ? error : 'エラーが発生しました。後ほど再度お試しください。'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              お問い合わせを受け付けました
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              お問い合わせありがとうございます。通常2営業日以内にご連絡いたします。
            </p>
            <div className="mt-10">
              <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                トップページに戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* ヘッダーセクション */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-indigo-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">お問い合わせ</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            サービスに関するご質問やお見積りのご依頼など、お気軽にお問い合わせください。
          </p>
        </div>
      </div>

      <div className="py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              お問い合わせフォーム
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              下記フォームに必要事項をご入力の上、送信ボタンをクリックしてください。
            </p>
          </div>
          <div className="mt-12">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  会社名
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  電話番号
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ${errors.subject ? 'border-red-500' : ''}`}
                  >
                    <option value="">選択してください</option>
                    <option value="サービスについて">サービスについて</option>
                    <option value="お見積り依頼">お見積り依頼</option>
                    <option value="採用について">採用について</option>
                    <option value="その他">その他</option>
                  </select>
                  {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  お問い合わせ詳細 <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md ${errors.message ? 'border-red-500' : ''}`}
                  ></textarea>
                  {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                      className={`h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded ${errors.consent ? 'border-red-500' : ''}`}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-500">
                      個人情報保護方針に同意する <span className="text-red-500">*</span>
                    </p>
                    {errors.consent && <p className="mt-2 text-sm text-red-600">{errors.consent}</p>}
                    <p className="mt-1 text-sm text-gray-500">
                      <Link href="/privacy" className="font-medium text-indigo-600 hover:text-indigo-500">
                        プライバシーポリシー
                      </Link>
                      をご確認ください。
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 他の連絡方法 */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">CONTACT</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              その他のお問い合わせ方法
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              フォーム以外にも、以下の方法でお問い合わせいただけます。
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">お電話でのお問い合わせ</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  <p>営業時間: 平日 9:00〜18:00</p>
                  <p className="mt-1 text-xl font-semibold">03-1234-5678</p>
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">メールでのお問い合わせ</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  <p>24時間受付中</p>
                  <p className="mt-1 text-xl font-semibold">info@example.com</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* オフィス所在地 */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">OFFICE</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              オフィス所在地
            </p>
          </div>

          <div className="mt-10">
            <div className="bg-white overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">本社</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">東京都千代田区</p>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">住所</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      〒100-0001<br />
                      東京都千代田区千代田1-1<br />
                      サンプルビル9F
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">アクセス</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      東京メトロ丸ノ内線・日比谷線「霞ヶ関駅」A2出口より徒歩5分<br />
                      東京メトロ千代田線「国会議事堂前駅」3番出口より徒歩7分
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="h-96 w-full bg-gray-300 mt-6 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 