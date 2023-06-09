import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TrendingPost({ post }) {
  const { id, title, description } = post;

  return (
    <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
      <Link href={`/posts/${id}`}>
        <Image
          src="/images/trending.jpg"
          alt="Trending post"
          className="object-cover object-center w-full h-48"
          width={500}
          height={300}
        />
      </Link>
      <div className="flex flex-grow">
        <div className="triangle"></div>
        <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
          <div>
            <Link
              href={`/posts/${id}`}
              className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
            >
              {title}
            </Link>
            <Link
              href={`/posts/${id}`}
              className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
            >
              {title}
            </Link>
            <p className="mb-4">{description}</p>
          </div>
          <div>
            <Link
              href={`/posts/${id}`}
              className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
