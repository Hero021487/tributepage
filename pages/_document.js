import Document, {Head, Main, NextScript, Html} from 'next/document';

class MyDocument extends Document{
    render(){
        return(
            <html lang='en'>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="a sample NextJS static site"/>
                    <meta name="robots" content="noindex, nofollow"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                    <link rel='stylesheet' href='https://unpkg.com/nprogress@0.2.0/nprogress.css'/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
                <style global jsx>{`
                    *{
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }
                    
                    body{
                        font-family: 'Montserrat', sans-serif;
                    }
                
                    @media screen and (max-width:760px){
                        body{
                            overflow-x: hidden;
                        }
                    }
                `}</style>
            </html>
        )
    }
}

export default MyDocument;