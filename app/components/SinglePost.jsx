import { formatDate } from '@/lib/formatDate';
import Image from 'next/image';
import Link from 'next/link';

export default function SinglePost({ post }) {
  const { id, title, description, published, author } = post;

  return (
    <div className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3">
      <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
        {/* SinglePost image */}
        <div className="md:flex-shrink-0">
          <Link href={`/posts/${id}`}>
            <Image
              src="/images/singlepost.jpg"
              alt="Blog Cover"
              className="w-full rounded-lg rounded-b-none"
              width={500}
              height={300}
            />
          </Link>
        </div>
        <hr className="border-gray-300" />
        {/* SinglePost title */}
        <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
          <Link href={`/posts/${id}`} className="hover:underline">
            <h2 className="text-2xl font-bold tracking-normal text-gray-800">
              {title}
            </h2>
          </Link>
        </div>
        <hr className="border-gray-300" />
        {/* SinglePost description */}
        <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
          {description}
        </p>
        <hr className="border-gray-300" />
        {/* SinglePost author */}
        <section className="px-4 py-2 mt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              <Link href={`/posts/${id}`}>
                <Image
                  className="object-cover h-10 rounded-full"
                  src="/images/author.jpg"
                  alt="author avatar"
                  height={40}
                  width={40}
                />
              </Link>
              <div className="flex flex-col mx-2">
                <span href="" className="font-semibold text-gray-700 ">
                  {author?.name}
                </span>
                <span className="mx-1 text-xs text-gray-600">
                  {formatDate(published)}
                </span>
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-600">5 minutes read</p>
          </div>
        </section>
      </div>
    </div>
  );
}
