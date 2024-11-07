# コースパワー自動ログアウト無効化拡張機能

## 概要
この Chrome 拡張機能は、CoursePower で自動的にログアウトされるのを無効化します。これにより、長時間操作しないとログアウトされてしまう問題を回避できます。

## 注意事項
- 本拡張機能による不具合や悪影響については未確認です。テスト中や課題の提出時に使用しないようにしてください。

## 使い方

1. [拡張機能のダウンロードリンク](https://github.com/SAYUTIM/CoursePower_AutoLogoutBlocker/raw/refs/heads/main/AutoLogoutBlocker_ver1.0.0.zip)から ZIP ファイルをダウンロードします。

2. ダウンロードした ZIP ファイルを解凍します。

3. Chrome の拡張機能ページ（`chrome://extensions/`）にアクセスし、右上の「デベロッパーモード」を有効にします。

4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、先ほど解凍したフォルダー内にある `AutoLogoutBlocker` を選択します。

5. 拡張機能「Auto Logout Blocker」が表示されたら、拡張機能を有効にします。

6. CoursePower のページを開き、右上のログアウトボタンの隣に「自動ログアウト無効化中」または「自動ログアウト有効化中」という表示が出ていれば設定完了です。

## 動作について

- 「自動ログアウト無効化中」の状態では、自動でログアウトされなくなります。
- 「自動ログアウト有効化中」の状態では、通常通り自動でログアウトされます。
