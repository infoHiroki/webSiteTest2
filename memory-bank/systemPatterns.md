# システムパターン

## アーキテクチャ概要

本プロジェクトは、Next.js 15をベースとしたReactアプリケーションです。App Routerを採用し、ファイルベースのルーティングを実装しています。

### レイヤー構造

```
src/
├── app/                  # App Router構造のルート
│   ├── page.tsx          # ホームページ
│   ├── layout.tsx        # ルートレイアウト
│   ├── company/          # 会社情報ページ
│   ├── services/         # サービス紹介ページ
│   ├── news/             # ニュースページ
│   ├── blog/             # ブログページ
│   ├── careers/          # 採用情報ページ
│   └── contact/          # お問い合わせページ
├── components/           # 再利用可能なコンポーネント
│   ├── layout/           # レイアウト関連コンポーネント
│   │   ├── Header.tsx    # ヘッダーコンポーネント
│   │   └── Footer.tsx    # フッターコンポーネント
│   └── ui/               # UIコンポーネント
└── lib/                  # ユーティリティ関数やヘルパー
```

## 設計原則

### コンポーネント設計

1. **ページコンポーネント**:
   - `app/`ディレクトリ内の各ページに対応するコンポーネント
   - ページ全体のレイアウトとコンテンツを定義
   - サーバーコンポーネントとして実装

2. **レイアウトコンポーネント**:
   - 複数のページで共通するレイアウト要素（ヘッダー、フッター等）
   - `components/layout/`ディレクトリに配置

3. **UIコンポーネント**:
   - ボタン、フォーム要素、カードなど再利用可能なUI要素
   - 将来的に`components/ui/`ディレクトリに配置予定

### 状態管理

現在のプロジェクト規模ではReactの標準機能（useState、useContext）を使用し、必要に応じて将来的にZustandなどの状態管理ライブラリを検討します。

### スタイリング

TailwindCSSを使用してスタイリングを行います。コンポーネントごとにクラス名を適用し、ユーティリティファーストのアプローチを採用しています。

## データ処理パターン

### フォーム処理

1. **Reactの状態管理**:
   - フォームの状態をuseStateで管理
   - バリデーションはフロントエンドで実装
   - 送信はonSubmitイベントで処理

2. **API連携**:
   - 現在はモックデータを使用
   - 将来的にはAPIエンドポイントを実装予定

### ルーティング

Next.jsのApp Routerを使用し、以下の設計に基づいてルーティングを実装:

1. **ファイルベースルーティング**:
   - ディレクトリ構造がURLパスに対応
   - 例: `/company` → `app/company/page.tsx`

2. **レイアウト継承**:
   - `layout.tsx`ファイルによる共通レイアウトの定義
   - すべてのページで共通のヘッダーとフッターを継承

## クライアント・サーバー分離

1. **サーバーコンポーネント**:
   - デフォルトではすべてのコンポーネントをサーバーコンポーネントとして実装
   - SEO最適化、初期ロード時のパフォーマンス向上

2. **クライアントコンポーネント**:
   - インタラクティブな要素を持つコンポーネントは`'use client'`ディレクティブを使用
   - 例: ヘッダーのモバイルメニュー、お問い合わせフォーム

## デプロイメント・CI/CD

デプロイメントプロセスとCI/CDパイプラインは未定です。プロジェクトの進行に合わせて検討する予定です。 