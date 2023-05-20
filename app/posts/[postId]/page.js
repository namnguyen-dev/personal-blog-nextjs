import Image from 'next/image';
import { markdownToHtml } from '@/lib/fetcher';
import { Suspense } from 'react';
import { getPosts } from '@/lib/fetcher';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/formatDate';
import { getPostById } from '@/lib/fetcher';
import RecentPost from '@/app/components/RecentPost';

export async function generateStaticParams() {
  const posts = await getPosts(); //deduped!

  if (!posts) return [];

  return posts.map(post => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }) {
  const post = await getPostById(postId); //deduped!

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
  };
}

export default async function SinglePost({ params: { postId } }) {
  const post = await getPostById(postId);
  const posts = await getPosts();
  if (!post || !posts) notFound();
  const filteredPosts = posts.filter(post => post.id !== postId);
  const recentPosts = filteredPosts.slice(0, 4);
  return <Article post={post} recentPosts={recentPosts} />;
}

async function Article({ post, recentPosts }) {
  const {
    title,
    subtitle,
    description,
    published,
    tags,
    content: mdContent,
  } = post;

  const content = await markdownToHtml(mdContent);
  return (
    <Suspense fallback={<loading />}>
      {/* Single post */}
      <div>
        <article>
          <header className="mx-auto mt-20 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            <p className="text-gray-500">{formatDate(published)}</p>
            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg text-gray-700">{subtitle}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {tags?.map(tag => {
                return (
                  <button
                    key={tag}
                    className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200"
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
            <Image
              className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover"
              src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              width={500}
              height={300}
              alt={description}
            />
          </header>
          <div className="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <div className="prose content text-gray-600 text-lg flex flex-col gap-4">
              <section dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </article>
      </div>
      <div className="w-fit mx-auto mt-10 flex space-x-2">
        <div className="h-0.5 w-2 bg-gray-600" />
        <div className="h-0.5 w-32 bg-gray-600" />
        <div className="h-0.5 w-2 bg-gray-600" />
      </div>

      {/* Recent Posts */}
      <div
        aria-label="Recent Posts"
        className="mx-auto mt-10 max-w-screen-xl py-20"
      >
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Most Recent Posts
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              View all the latest posts{' '}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {recentPosts?.map(post => (
              <RecentPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
}