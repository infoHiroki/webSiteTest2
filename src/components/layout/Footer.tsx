import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">株式会社サンプル</h2>
            <address className="not-italic text-gray-300 text-sm">
              <p>〒100-0001</p>
              <p>東京都千代田区千代田1-1</p>
              <p>サンプルビル9F</p>
              <p className="mt-2">TEL: 03-1234-5678</p>
              <p>FAX: 03-1234-5679</p>
            </address>
          </div>

          {/* サイトマップ1 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">企業情報</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/company" className="hover:text-white hover:underline">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/company/philosophy" className="hover:text-white hover:underline">
                  企業理念
                </Link>
              </li>
              <li>
                <Link href="/company/message" className="hover:text-white hover:underline">
                  代表メッセージ
                </Link>
              </li>
              <li>
                <Link href="/company/history" className="hover:text-white hover:underline">
                  沿革
                </Link>
              </li>
            </ul>
          </div>

          {/* サイトマップ2 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">サービス</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/services/consulting" className="hover:text-white hover:underline">
                  コンサルティング
                </Link>
              </li>
              <li>
                <Link href="/services/development" className="hover:text-white hover:underline">
                  システム開発
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="hover:text-white hover:underline">
                  運用・保守
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="hover:text-white hover:underline">
                  クラウドサービス
                </Link>
              </li>
            </ul>
          </div>

          {/* サイトマップ3 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">情報</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/news" className="hover:text-white hover:underline">
                  ニュース
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white hover:underline">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white hover:underline">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} 株式会社サンプル All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 