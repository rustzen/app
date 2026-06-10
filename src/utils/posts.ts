import { getCollection } from 'astro:content';

export async function getAllPosts() {
  return (await getCollection('posts')).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}
