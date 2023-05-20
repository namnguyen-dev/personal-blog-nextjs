import { getPosts } from '@/lib/fetcher';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import loading from './loading';
import ArchivePost from '../components/ArchivePost';

export async function generateStaticParams() {
  const posts = await getPosts(); //deduped!

  if (!posts) return [];

  return posts.map(post => ({
    postId: post.id,
  }));
}

export default async function AllPosts() {
  const posts = await getPosts();
  if (!posts) notFound();
  return (
    <>
      <Suspense fallback={<loading />}>
        <section className="py-10">
          <h1 className=" text-center font-sans text-5xl font-bold mb-6">
            Archive
          </h1>
          <p className="mt-2 text-lg text-center mb-12">
            See all posts I have ever written.
          </p>
          <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 lg:grid-cols-3">
            {posts?.map(post => (
              <ArchivePost key={post.id} post={post} />
            ))}
          </div>
        </section>
      </Suspense>
    </>
  );
}
