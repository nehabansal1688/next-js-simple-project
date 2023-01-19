import Navbar from '../components/navbar';
import Head from 'next/head';
import ThemeSwitch from '../components/themeSwitch';
import '../style/global.css';

function App({Component,pageProps }) {
    return(
        <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header><Navbar /></header>
        <ThemeSwitch />

        <Component {...pageProps} />
        </>
    );
}

export default App;