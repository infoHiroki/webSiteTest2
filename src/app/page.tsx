import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* ヒーローセクション */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-700 opacity-90"></div>
        <div className="relative h-[600px] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              革新的なソリューションで<br />ビジネスの未来を創造する
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              株式会社サンプルは、最先端のテクノロジーと豊富な経験を活かし、
              お客様のビジネス課題を解決する総合ITサービス企業です。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
              <Link href="/company" className="rounded-md bg-white px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-50 md:py-4 md:px-10">
                会社情報
              </Link>
              <Link href="/contact" className="rounded-md bg-indigo-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-600 md:py-4 md:px-10">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* サービス紹介セクション */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">SERVICES</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              サービス紹介
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              私たちは様々な分野で最適なソリューションを提供します
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* サービス1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 bg-indigo-100 rounded-md flex items-center justify-center text-indigo-600 mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">コンサルティング</h3>
                <p className="mt-2 text-base text-gray-500">
                  経験豊富なコンサルタントがお客様のビジネス課題を分析し、最適な解決策を提案します。
                </p>
                <div className="mt-4">
                  <Link href="/services/consulting" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    詳細を見る →
                  </Link>
                </div>
              </div>
            </div>

            {/* サービス2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 bg-indigo-100 rounded-md flex items-center justify-center text-indigo-600 mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">システム開発</h3>
                <p className="mt-2 text-base text-gray-500">
                  最新の技術を駆使して、お客様のニーズに合わせたカスタムシステムを開発します。
                </p>
                <div className="mt-4">
                  <Link href="/services/development" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    詳細を見る →
                  </Link>
                </div>
              </div>
            </div>

            {/* サービス3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 bg-indigo-100 rounded-md flex items-center justify-center text-indigo-600 mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">運用・保守</h3>
                <p className="mt-2 text-base text-gray-500">
                  24時間365日の監視体制で、システムの安定稼働を維持し、トラブルに迅速に対応します。
                </p>
                <div className="mt-4">
                  <Link href="/services/maintenance" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    詳細を見る →
                  </Link>
                </div>
              </div>
            </div>

            {/* サービス4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 bg-indigo-100 rounded-md flex items-center justify-center text-indigo-600 mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">クラウドサービス</h3>
                <p className="mt-2 text-base text-gray-500">
                  柔軟性と拡張性に優れたクラウドソリューションで、ビジネスの成長をサポートします。
                </p>
                <div className="mt-4">
                  <Link href="/services/cloud" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    詳細を見る →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 会社情報セクション */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">ABOUT US</h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                私たちについて
              </p>
              <p className="mt-6 text-xl text-gray-500">
                株式会社サンプルは、2005年の創業以来、お客様のビジネス成長を技術の力でサポートしてきました。
              </p>
              <div className="mt-8 space-y-4 text-gray-600">
                <p>
                  私たちは、「技術で社会に貢献する」という理念のもと、常に最新のテクノロジーを追求し、
                  高品質なサービスを提供することでお客様の信頼を獲得してきました。
                </p>
                <p>
                  国内外の大手企業から中小企業まで、幅広いお客様にサービスを提供し、
                  多様な業界での豊富な実績があります。
                </p>
              </div>
              <div className="mt-10">
                <Link href="/company" className="text-indigo-600 hover:text-indigo-500 font-medium">
                  会社情報をもっと見る →
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
                    <div className="h-80 w-full bg-gray-300"></div>
                  </div>
                </div>
                <div className="col-span-1 pt-8">
                  <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
                    <div className="h-80 w-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* お知らせセクション */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">NEWS</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              お知らせ
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            {/* ニュース1 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <div className="h-48 w-full bg-gray-300"></div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    プレスリリース
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      新サービス「Cloud Optimizer」の提供開始について
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      クラウド環境の最適化を自動で行い、コスト削減と性能向上を実現する新サービスの提供を開始しました。
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-sm text-gray-500">2023年10月1日</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ニュース2 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <div className="h-48 w-full bg-gray-300"></div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    お知らせ
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      本社オフィスの移転について
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      業務拡大に伴い、2023年9月1日より本社オフィスを東京都千代田区に移転いたしました。
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-sm text-gray-500">2023年8月15日</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ニュース3 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <div className="h-48 w-full bg-gray-300"></div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    イベント
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      「DX推進セミナー」開催のお知らせ
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      企業のDX推進事例を紹介するオンラインセミナーを開催します。参加費無料、事前登録制です。
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-sm text-gray-500">2023年7月30日</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/news" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              すべてのお知らせを見る
            </Link>
          </div>
        </div>
      </div>

      {/* お問い合わせセクション */}
      <div className="py-24 bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            お問い合わせ
          </h2>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
            サービスに関するご質問やお見積りのご依頼など、お気軽にお問い合わせください。
          </p>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:px-10">
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
