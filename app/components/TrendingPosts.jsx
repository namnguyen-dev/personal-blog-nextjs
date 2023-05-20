import Link from 'next/link';
import { getPosts } from '@/lib/fetcher';
import TrendingPost from './TrendingPost';

export default async function TrendingPosts() {
  const data = await getPosts();
  if (!data) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  const posts = data?.slice(0, 4);
  return (
    <div className="container text-gray-900 bg-gray-100">
      <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
            Trending Posts
          </h2>
          <Link
            href="/allposts"
            className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
          >
            {`View All Posts >>>`}
          </Link>
        </div>

        <div className="flex flex-wrap -mx-4">
          {posts.map(post => (
            <TrendingPost key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
