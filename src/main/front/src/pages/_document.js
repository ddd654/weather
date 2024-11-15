// NextJS에서는 _document.js로 html 구조를 설정할 수 있다고 한다
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* 뷰포트 설정 추가 */}
          {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /> */}
          {/* 구글 폰트 추가 (예시) */}
          <link href="https://fonts.googleapis.com/css2?family=Poor+Story&display=swap" rel="stylesheet" />
          {/* 전역 reset.css 설정 */}
          <link rel='stylesheet' href='/css/reset.css'></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
