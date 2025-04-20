import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'ブログ | 株式会社サンプル',
  description: '株式会社サンプルのブログです。ITトレンドや技術情報を発信しています。',
};

// ダミーのブログデータ
const blogPosts = [
  {
    id: 1,
    title: 'Next.js 15の新機能と使い方',
    excerpt: 'Next.js 15がリリースされました。Server Componentsやapp directoryなど、新しい機能と使い方について解説します。',
    category: 'テクノロジー',
    date: '2023-12-15',
    author: '山田 太郎',
    image: '/images/blog/nextjs.jpg',
    tags: ['Next.js', 'React', 'JavaScript']
  },
  {
    id: 2,
    title: 'ITコンサルティングにおけるDXの重要性',
    excerpt: 'デジタルトランスフォーメーション（DX）が企業の競争力を高める理由と、成功するためのポイントについて解説します。',
    category: 'ビジネス',
    date: '2023-12-10',
    author: '佐藤 花子',
    image: '/images/blog/dx.jpg',
    tags: ['DX', 'コンサルティング', 'ビジネス戦略']
  },
  {
    id: 3,
    title: 'チームリモートワークの最適化手法',
    excerpt: 'リモートワークが一般化する中、チームの生産性とエンゲージメントを維持するための効果的な方法を紹介します。',
    category: 'マネジメント',
    date: '2023-12-05',
    author: '鈴木 一郎',
    image: '/images/blog/remote.jpg',
    tags: ['リモートワーク', 'チームビルディング', 'マネジメント']
  },
  {
    id: 4,
    title: 'TailwindCSSで効率的なUIデザイン',
    excerpt: 'ユーティリティファーストのCSSフレームワーク、TailwindCSSの基本概念と効率的な活用方法について解説します。',
    category: 'テクノロジー',
    date: '2023-12-01',
    author: '高橋 真理',
    image: '/images/blog/tailwind.jpg',
    tags: ['CSS', 'TailwindCSS', 'Web開発']
  },
  {
    id: 5,
    title: 'セキュリティを考慮したWebアプリケーション開発',
    excerpt: 'Web開発においてセキュリティを確保するための基本原則と実装方法について解説します。',
    category: 'テクノロジー',
    date: '2023-11-25',
    author: '田中 健太',
    image: '/images/blog/security.jpg',
    tags: ['セキュリティ', 'Web開発', 'OWASP']
  },
  {
    id: 6,
    title: 'ITプロジェクト管理のベストプラクティス',
    excerpt: 'ITプロジェクトを成功に導くための管理手法とチームコミュニケーションのポイントについて解説します。',
    category: 'マネジメント',
    date: '2023-11-20',
    author: '木村 誠',
    image: '/images/blog/project.jpg',
    tags: ['プロジェクト管理', 'アジャイル', 'チームビルディング']
  }
];

// カテゴリー一覧
const categories = ['すべて', 'テクノロジー', 'ビジネス', 'マネジメント'];

// 人気記事
const popularPosts = [1, 4, 2];

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg shadow-xl mb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-12 text-center lg:text-left">
          <div className="md:max-w-3xl md:mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">テクノロジーとビジネスの最新情報</h1>
            <p className="text-white text-lg md:text-xl">
              株式会社サンプルのエンジニアとコンサルタントが、テクノロジーとビジネスに関する知見を発信します。
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* メインコンテンツ */}
        <div className="lg:w-2/3">
          {/* 検索と絞り込み */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="md:flex-grow">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="記事を検索..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button className="absolute right-3 top-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 記事一覧 */}
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-gray-200 relative">
                  {/* 実際のプロジェクトでは正しい画像パスを使用 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3">
                    <Link href={`/blog/${post.id}`} className="hover:text-indigo-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                    続きを読む →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* ページネーション */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                前へ
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600"
              >
                1
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                次へ
              </a>
            </nav>
          </div>
        </div>

        {/* サイドバー */}
        <div className="lg:w-1/3">
          {/* 人気記事 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">人気記事</h3>
            <div className="space-y-4">
              {popularPosts.map(id => {
                const post = blogPosts.find(post => post.id === id);
                return post ? (
                  <div key={post.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-200 flex-shrink-0 rounded"></div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">
                        <Link href={`/blog/${post.id}`} className="hover:text-indigo-600 transition-colors">
                          {post.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>

          {/* カテゴリー */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">カテゴリー</h3>
            <div className="space-y-2">
              {categories.slice(1).map((category, index) => (
                <div key={index} className="flex justify-between items-center">
                  <Link href={`/blog/category/${category}`} className="text-gray-700 hover:text-indigo-600 transition-colors">
                    {category}
                  </Link>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                    {blogPosts.filter(post => post.category === category).length}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* タグクラウド */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">タグ</h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, index) => (
                <Link 
                  key={index}
                  href={`/blog/tag/${tag}`}
                  className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full hover:bg-indigo-100 hover:text-indigo-800 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* ニュースレター登録 */}
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">ニュースレター登録</h3>
            <p className="text-gray-600 text-sm mb-4">最新の記事や業界情報を定期的にお届けします。</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="メールアドレス"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                登録する
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 