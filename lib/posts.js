import {readFile, readdir} from 'fs/promises';

export async function getPosts(slug) {
    const data =await readFile(`content/posts/${slug}.json`,'utf8');
    return JSON.parse(data);
}

export async function getFileNames() {
    const files  =await  readdir('content/posts');
    return files.filter(file => file.endsWith('.json')).map(file =>  file.slice(0, -5));
}