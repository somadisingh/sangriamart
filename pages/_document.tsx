import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head> 
          <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600" 
          rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
//https://javascript.plainenglish.io/how-to-add-a-custom-google-font-to-a-next-js-and-tailwind-css-app-d0e4ad03f1c3