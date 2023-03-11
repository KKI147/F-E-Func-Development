import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import Script from "next/script";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" /> */}
        </Head>
        <body>
          <Main />
          <Script
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e78c7f5e9668eaa754a69010f5780571&libraries=services,clusterer&autoload=false"
            strategy="beforeInteractive"
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}
