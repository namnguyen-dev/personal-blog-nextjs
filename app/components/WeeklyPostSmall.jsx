import { formatDate } from '@/lib/formatDate';
import Image from 'next/image';
import Link from 'next/link';

export default function WeeklyPostSmall({ custom, post }) {
  const { id, title, published } = post;
  return (
    <div className={`${custom}`}>
      <div>
        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
          {formatDate(published)}
        </p>
        <div className="absolute bottom-0 left-0 p-6">
          <Link href={`/posts/${id}`}>
            <h2 className="text-xl font-semibold 5 text-white">{title}</h2>
          </Link>

          <Link
            href={`/posts/${id}`}
            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
          >
            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
            <svg
              className="fill-stroke"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.75 12.5L10.25 8L5.75 3.5"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
      <Link href={`/posts/${id}`}>
        <Image
          src="/images/post.jpg"
          className="w-full"
          alt="weekly post"
          width={500}
          height={500}
        />
      </Link>
    </div>
  );
}
