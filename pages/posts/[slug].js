import Head from 'next/head';
import { getPosts, getFileNames } from '../../lib/posts';

export async function getStaticPaths() {
    const fileNames = await getFileNames();
    return {
        paths: fileNames.map(file => ({params: {   slug:file}})),
        fallback:false
    }
}
export async function getStaticProps({params:{slug}}){
    const post =await getPosts(slug);
    return{
        props:{ post }
    }
};
function PostPage({post}) {
    console.log(post)
    return(
        <>
          <Head>
            <title>{post.title}</title>
        </Head>
        <main>
            <p>{post.body}</p>
        </main>
        </>
    )
}
export default PostPage;