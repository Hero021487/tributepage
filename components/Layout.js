import Nav from './Nav';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

//NProgree configs
NProgress.configure({ showSpinner: false });
Router.onRouterChangeStart = url => {
    NProgress.start();
}
Router.onRouterChangeComplete = ()=> NProgress.done();
Router.onRouterChangeError = ()=> NProgress.done();



function Layout({children, title}) {
    return (
        <div>
            <Head>
                <title>Marawi Warriors</title>
            </Head>
            <Nav/>

            <header>
                <h1>{title}</h1>
            </header>

            <div className='Container'>
                {children}
            </div>
        </div>
    )
}

export default Layout;
