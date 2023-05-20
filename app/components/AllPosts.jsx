import React from 'react';
import Link from 'next/link';
import SinglePost from './SinglePost';
import SectionHeader from './SectionHeader';
import { getPosts } from '@/lib/fetcher';

export default async function AllPosts() {
  const posts = await getPosts();
  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <>
      <div className="container my-16 flex flex-col">
        <SectionHeader title="All Posts" />
        <section className=" flex flex-row flex-wrap mx-auto sm:px-8 lg:px-12  ">
          {posts?.map(post => (
            <SinglePost key={post.id} post={post} />
          ))}
        </section>
        <Link
          href="/allposts"
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none "
        >
          View all posts
        </Link>
      </div>
    </>
  );
}
