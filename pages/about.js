import Head from 'next/head';
import Link from 'next/link';

function About() {
    console.log('about page');
    return(
        <>
          <Head>
            <title>About</title>
        </Head>
        <main>
            <h1>About Page</h1>
        </main>

        <ul>
                <li ><Link  href="/posts/firstPost" >First Post </Link></li>
                <li ><Link  href="/posts/secondPost" >Second Post </Link></li>
                <li ><Link  href="/posts/thirdPost" >third Post </Link></li>
                </ul>
        </>
    )
}
export default About;