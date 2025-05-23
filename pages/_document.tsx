import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                {/* <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,600;1,600&display=swap" rel="stylesheet"/>  */}
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet"/>
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