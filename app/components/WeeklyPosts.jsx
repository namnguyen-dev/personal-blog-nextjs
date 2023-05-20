import { getPosts } from '@/lib/fetcher';

export default async function WeeklyPosts() {
  const posts = await getPosts();
  console.log(posts);
}
