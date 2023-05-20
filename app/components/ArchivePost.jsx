import Link from 'next/link';
import Image from 'next/image';

export default function ArchivePost({ post }) {
  const { id, title, description } = post;

  return (
    <article className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
      <Link href={`posts/${id}`}>
        <Image
          src="/images/recentPost.jpg"
          className="w-full"
          width={500}
          height={300}
          alt="blog post"
        />
      </Link>
      <div className="flex-auto px-6 py-5">
        <Link href={`posts/${id}`}>
          <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl hover:underline hover:underline-offset-2">
            {title}
          </h3>
        </Link>
        <Link href={`posts/${id}`}>
          <p className="mb-4 text-base font-light">{description}</p>
        </Link>

        <Link href={`posts/${id}`}>
          <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
            Read More
          </span>
        </Link>
      </div>
    </article>
  );
}
