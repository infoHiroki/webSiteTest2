import React from 'react';

export const metadata = {
  title: '採用情報 | 株式会社サンプル',
  description: '株式会社サンプルの採用情報ページです。一緒に働く仲間を募集しています。',
};

export default function CareersPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ヒーローセクション */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-xl mb-12 overflow-hidden">
        <div className="px-6 py-12 md:py-20 md:px-12 text-center lg:text-left">
          <div className="md:max-w-3xl md:mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">採用情報</h1>
            <p className="text-white text-lg md:text-xl mb-8">
              私たちと一緒に、テクノロジーで未来を創りませんか？<br />
              チャレンジ精神あふれる仲間を募集しています。
            </p>
            <a
              href="#positions"
              className="inline-block px-6 py-3 bg-white text-indigo-600 font-medium rounded-md shadow hover:bg-gray-100 transition-colors"
            >
              募集職種を見る
            </a>
          </div>
        </div>
      </div>

      {/* 企業理念と文化 */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">企業理念と文化</h2>
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">ミッション</h3>
          <p className="text-gray-600 mb-6">
            テクノロジーの力で企業の可能性を広げ、社会に新たな価値を創造します。お客様の成功が私たちの成功であり、
            持続可能なビジネスとより良い社会の実現に貢献することを目指しています。
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">働き方</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>フレックスタイム制度を導入し、ワークライフバランスを重視</li>
            <li>リモートワークとオフィスワークを柔軟に組み合わせたハイブリッドワークスタイル</li>
            <li>スキルアップのための社内勉強会や外部研修の充実</li>
            <li>定期的な1on1ミーティングによるキャリア支援</li>
            <li>健康経営を推進し、心身ともに健康な職場環境づくり</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">私たちの価値観</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium text-indigo-600 mb-2">挑戦</h4>
              <p className="text-sm text-gray-600">新しいことに挑戦し続け、失敗を恐れない文化を大切にしています。</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium text-indigo-600 mb-2">誠実</h4>
              <p className="text-sm text-gray-600">お客様、社会、そして仲間に対して誠実であることを基本としています。</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-medium text-indigo-600 mb-2">協働</h4>
              <p className="text-sm text-gray-600">多様な視点や専門性を持つメンバーが協力し、より良いソリューションを生み出します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 募集職種 */}
      <section id="positions" className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">募集職種</h2>
        
        <div className="space-y-6">
          {/* エンジニア職 */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="border-b px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800">Webエンジニア</h3>
            </div>
            <div className="px-6 py-4">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                <div>
                  <dt className="text-sm font-medium text-gray-500">雇用形態</dt>
                  <dd className="mt-1 text-gray-900">正社員</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">勤務地</dt>
                  <dd className="mt-1 text-gray-900">東京都渋谷区（リモート勤務可）</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">必須スキル</dt>
                  <dd className="mt-1 text-gray-900">HTML/CSS, JavaScript, React</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">歓迎スキル</dt>
                  <dd className="mt-1 text-gray-900">TypeScript, Next.js, GraphQL</dd>
                </div>
              </dl>
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-500">仕事内容</h4>
                <p className="mt-1 text-gray-900">
                  企業向けWebアプリケーションの設計・開発・運用を担当していただきます。フロントエンド開発を中心に、
                  バックエンド開発にも携わる機会があります。最新技術を積極的に取り入れ、ユーザー体験の向上を追求します。
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  応募する
                </a>
              </div>
            </div>
          </div>

          {/* 営業職 */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="border-b px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800">ITコンサルタント</h3>
            </div>
            <div className="px-6 py-4">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                <div>
                  <dt className="text-sm font-medium text-gray-500">雇用形態</dt>
                  <dd className="mt-1 text-gray-900">正社員</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">勤務地</dt>
                  <dd className="mt-1 text-gray-900">東京都渋谷区（一部リモート勤務可）</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">必須スキル</dt>
                  <dd className="mt-1 text-gray-900">ビジネス英語、プレゼンテーションスキル</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">歓迎スキル</dt>
                  <dd className="mt-1 text-gray-900">ITプロジェクト管理経験、提案書作成経験</dd>
                </div>
              </dl>
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-500">仕事内容</h4>
                <p className="mt-1 text-gray-900">
                  企業のデジタルトランスフォーメーション推進を支援するコンサルティングサービスを提供します。
                  お客様の課題をヒアリングし、最適なソリューションを提案、プロジェクトの企画から実行までを担当します。
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  応募する
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 応募方法 */}
      <section id="contact" className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">応募方法</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-600 mb-6">
            以下のフォームからご応募いただくか、採用担当（<a href="mailto:recruit@sample-company.jp" className="text-indigo-600 hover:text-indigo-800">recruit@sample-company.jp</a>）まで直接メールをお送りください。
          </p>
          <div className="space-y-4">
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                希望職種
              </label>
              <select
                id="position"
                name="position"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>Webエンジニア</option>
                <option>ITコンサルタント</option>
                <option>その他</option>
              </select>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                お名前
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                メールアドレス
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                履歴書・職務経歴書
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>ファイルをアップロード</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">またはドラッグ＆ドロップ</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX</p>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                応募する
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 採用フロー */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">採用フロー</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <ol className="relative border-l border-gray-200 ml-3">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full -left-4 ring-4 ring-white">
                <span className="text-indigo-500 font-semibold">1</span>
              </span>
              <h3 className="font-semibold text-lg text-gray-900">書類選考</h3>
              <p className="text-gray-600">
                履歴書・職務経歴書の内容を確認します。選考結果は1週間以内にメールでお知らせします。
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full -left-4 ring-4 ring-white">
                <span className="text-indigo-500 font-semibold">2</span>
              </span>
              <h3 className="font-semibold text-lg text-gray-900">1次面接</h3>
              <p className="text-gray-600">
                オンラインで30分程度の面接を行います。主に経験やスキルについてお聞きします。
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full -left-4 ring-4 ring-white">
                <span className="text-indigo-500 font-semibold">3</span>
              </span>
              <h3 className="font-semibold text-lg text-gray-900">課題提出（技術職のみ）</h3>
              <p className="text-gray-600">
                実務に近い課題に取り組んでいただきます。期間は1週間程度です。
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full -left-4 ring-4 ring-white">
                <span className="text-indigo-500 font-semibold">4</span>
              </span>
              <h3 className="font-semibold text-lg text-gray-900">最終面接</h3>
              <p className="text-gray-600">
                対面またはオンラインで1時間程度の面接を行います。代表取締役と人事担当が同席します。
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-4 ring-white">
                <span className="text-green-500 font-semibold">5</span>
              </span>
              <h3 className="font-semibold text-lg text-gray-900">内定</h3>
              <p className="text-gray-600">
                最終面接から1週間以内に結果をご連絡します。内定の場合は条件面などの詳細をお伝えします。
              </p>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
} 