import Link from 'next/link';
import React from 'react';

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* ヘッダーセクション */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-indigo-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">サービス</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            お客様のビジネス課題を解決する多様なサービスを提供しています。
          </p>
        </div>
      </div>

      {/* サービス概要セクション */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">SERVICES</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              お客様のビジネスを支える<br />多様なソリューション
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              お客様のニーズに合わせた最適なソリューションを提供し、ビジネスの成長と発展をサポートします。
            </p>
          </div>
        </div>
      </div>

      {/* サービス詳細セクション */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* サービス1: コンサルティング */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="text-base text-indigo-600 font-semibold tracking-wide uppercase">01</div>
              <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                ITコンサルティング
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  お客様のビジネス目標達成に向けた戦略的なITコンサルティングサービスを提供します。
                </p>
                <p>
                  経験豊富なコンサルタントが、お客様のビジネス課題を深く理解し、最適なIT戦略を立案します。
                  デジタルトランスフォーメーション（DX）の推進から、IT投資の最適化、セキュリティ対策まで、
                  幅広い領域でお客様をサポートします。
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">主なサービス内容</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>IT戦略立案・実行支援</li>
                    <li>デジタルトランスフォーメーション（DX）推進</li>
                    <li>業務プロセス改善</li>
                    <li>システム導入・刷新に関する助言</li>
                    <li>ITガバナンス・セキュリティ対策</li>
                    <li>プロジェクトマネジメント支援</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/services/consulting" className="text-indigo-600 hover:text-indigo-500 font-medium">
                  詳細を見る →
                </Link>
              </div>
            </div>
            <div className="flex justify-center mb-10 lg:mb-0 order-1 lg:order-2">
              <div className="h-96 w-full bg-gray-300 rounded-lg"></div>
            </div>
          </div>

          {/* サービス2: システム開発 */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center mb-24">
            <div className="flex justify-center mb-10 lg:mb-0">
              <div className="h-96 w-full bg-gray-300 rounded-lg"></div>
            </div>
            <div>
              <div className="text-base text-indigo-600 font-semibold tracking-wide uppercase">02</div>
              <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                システム開発
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  お客様のニーズに合わせたカスタムシステムを設計・開発します。
                </p>
                <p>
                  最新の技術と手法を活用し、使いやすく拡張性の高いシステムを構築します。
                  要件定義から設計、開発、テスト、導入まで、プロジェクトの全工程を確実に
                  遂行し、高品質なシステムを提供します。
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">主なサービス内容</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Webアプリケーション開発</li>
                    <li>モバイルアプリケーション開発</li>
                    <li>業務システム開発</li>
                    <li>データベース設計・構築</li>
                    <li>API開発・連携</li>
                    <li>レガシーシステムのモダナイゼーション</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/services/development" className="text-indigo-600 hover:text-indigo-500 font-medium">
                  詳細を見る →
                </Link>
              </div>
            </div>
          </div>

          {/* サービス3: 運用・保守 */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="text-base text-indigo-600 font-semibold tracking-wide uppercase">03</div>
              <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                運用・保守
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  システムの安定稼働を実現するための運用・保守サービスを提供します。
                </p>
                <p>
                  24時間365日の監視体制で、システムの安定稼働を維持します。
                  障害発生時には迅速に対応し、ダウンタイムを最小限に抑えます。
                  また、定期的なシステム診断や性能分析を行い、最適な運用環境を維持します。
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">主なサービス内容</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>24時間365日の監視・運用</li>
                    <li>障害対応・トラブルシューティング</li>
                    <li>パフォーマンス最適化</li>
                    <li>セキュリティ監視・対策</li>
                    <li>定期メンテナンス・アップデート</li>
                    <li>システム改善提案</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/services/maintenance" className="text-indigo-600 hover:text-indigo-500 font-medium">
                  詳細を見る →
                </Link>
              </div>
            </div>
            <div className="flex justify-center mb-10 lg:mb-0 order-1 lg:order-2">
              <div className="h-96 w-full bg-gray-300 rounded-lg"></div>
            </div>
          </div>

          {/* サービス4: クラウドサービス */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <div className="flex justify-center mb-10 lg:mb-0">
              <div className="h-96 w-full bg-gray-300 rounded-lg"></div>
            </div>
            <div>
              <div className="text-base text-indigo-600 font-semibold tracking-wide uppercase">04</div>
              <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                クラウドサービス
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  柔軟性と拡張性に優れたクラウドソリューションを提供します。
                </p>
                <p>
                  AWSやAzure、Google Cloudなど主要なクラウドプラットフォームに対応し、
                  お客様のニーズに合わせた最適なクラウド環境を構築します。
                  オンプレミスからクラウドへの移行支援や、マルチクラウド環境の構築・運用も
                  サポートします。
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">主なサービス内容</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>クラウド環境の設計・構築</li>
                    <li>オンプレミスからクラウドへの移行支援</li>
                    <li>マルチクラウド環境の構築・運用</li>
                    <li>クラウドネイティブアプリケーション開発</li>
                    <li>クラウドコスト最適化</li>
                    <li>クラウドセキュリティ対策</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/services/cloud" className="text-indigo-600 hover:text-indigo-500 font-medium">
                  詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 導入事例セクション */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">CASE STUDIES</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              導入事例
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              様々な業界のお客様へのソリューション提供事例をご紹介します。
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {/* 事例1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 w-full bg-gray-300"></div>
              <div className="p-6">
                <div className="text-sm font-medium text-indigo-600 mb-1">製造業</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">生産管理システムの刷新</h3>
                <p className="text-gray-600 mb-4">
                  老朽化した生産管理システムを最新技術で刷新し、生産効率の30%向上を実現。
                </p>
                <Link href="/case-studies/manufacturing" className="text-indigo-600 hover:text-indigo-500 font-medium">
                  詳細を見る →
                </Link>
              </div>
            </div>

            {/* 事例2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 w-full bg-gray-300"></div>
              <div className="p-6">
                <div className="text-sm font-medium text-indigo-600 mb-1">金融</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">オンラインバンキングシステムの構築</h3>
                <p className="text-gray-600 mb-4">
                  セキュリティを重視した次世代オンラインバンキングシステムを構築し、顧客満足度が大幅に向上。
                </p>
                <Link href="/case-studies/finance" className="text-indigo-600 hover:text-indigo-500 font-medium">
                  詳細を見る →
                </Link>
              </div>
            </div>

            {/* 事例3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 w-full bg-gray-300"></div>
              <div className="p-6">
                <div className="text-sm font-medium text-indigo-600 mb-1">小売</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ECサイトと実店舗の在庫連携システム</h3>
                <p className="text-gray-600 mb-4">
                  ECサイトと実店舗の在庫をリアルタイムで連携させるシステムを開発し、販売機会ロスを削減。
                </p>
                <Link href="/case-studies/retail" className="text-indigo-600 hover:text-indigo-500 font-medium">
                  詳細を見る →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/case-studies" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              すべての導入事例を見る
            </Link>
          </div>
        </div>
      </div>

      {/* お問い合わせセクション */}
      <div className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            サービスについてのご相談
          </h2>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
            各サービスの詳細や料金、導入事例についてのご質問は、お気軽にお問い合わせください。
            専門のスタッフがお客様のニーズに合わせたソリューションをご提案いたします。
          </p>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:px-10">
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 