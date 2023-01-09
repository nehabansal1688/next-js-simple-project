#Next Js

Components which can be accessed from URL has to be written under pages folder.
Next js prerenders the components so even if application is offline you can still see the page.
To render routes you can simple use LInk tag <Link  href="/about" >about </Link> where about is component under pages
Use href as '/' in case of default route
common logic like navbar, footer atc can be added as _app.js under pages folder.

function App({Component,pageProps }) {
    return(
        <>
        <header><Navbar /></header>
        <Component {...pageProps} />
        </>
    );
}
you need not to include _app in any other file. next js will take care of that for you
