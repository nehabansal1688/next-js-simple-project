# __Next Js__

*Components which can be accessed from URL has to be written under pages folder.
*Next js prerenders the components so even if application is offline you can still see the page.
*To render routes you can simple use LInk tag <Link  href="/about" >about </Link> where about is component under pages
* Use href as '/' in case of default route
*common logic like navbar, footer atc can be added as _app.js under pages folder.

function App({Component,pageProps }) {
    return(
        <>
        <header><Navbar /></header>
        <Component {...pageProps} />
        </>
    );
}
* you need not to include _app in any other file. next js will take care of that for you

* If you want to include something in page head then import Head from next/head

* to include style in application you can either use global css or use style jsx inside component
<style jsx>{` li{color:red}`}</style>

* Create public folder to add all assets like website icon favicon.ico can be added as link in head tag for the website icon
* Import Head from 'next/head' and use <head><title>ddd</title> </head> in component

__Passing props to component__
<br />
export async function getStaticProps(){
    return{
        props:{
            post:{
                title: 'post title',
                body: 'my first post'
            }
        }
    }
};

* next js generates ssg static site generation. next js uses getStaticProps to fetch api data and it will be converted to json and static html is generated.
* we can use node js functionality in getStaticProp function as it runs on server
* data can be in marked down i.e. md file , one can install npm marked and __import marked from 'marked'__. use readfileto read md file and use __marked(file)__. it will retrun html but it will display html code n will not render it. use dangeriouslySetInnerHTML 

==============================<br/>
__Dynamic Routes__ <br/>
=========================<br/>

* if you want to use same page for multiple url params then page can be created like [page].js and you have to use __getStaticPath__.  
* export async function getStaticPaths() {
    return {
        paths:[
            {params: {   slug:'firstPost'}},
           { params: {   slug:'secondPost'}}
        ],
        fallback:false
    }
} <br />
* use fallback to show 404 not found if user is tryng to access param which is not listed in static path
* 
Next JS uses hydrate instead of reactdom.render. html pages contains buttons, input boxes etc from server and after using hydrate it attached event handling to those buttons.

__hydration attaches clinet side functionality of app to the page__

if you want to use localstorage in next js, server dnt recognize that. you will have to use typeOf localStorage. and you can supressHydrationWarning using this attribute in tag

# Headless CMS - content management system. - cms without UI
it provides web api
* Strapi - headless cms
* it lets you create user base for authentication and you can create collection with all the fields and specify field types
* it exposes rest api for you to access data



