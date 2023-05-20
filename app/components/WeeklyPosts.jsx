import { getPosts } from '@/lib/fetcher';
import WeeklyPostSmall from './WeeklyPostSmall';
import WeeklyPostBig from './WeeklyPostBig';

export default async function WeeklyPosts() {
  const posts = await getPosts();
  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }
  const post1 = posts?.[0];
  const post2 = posts?.[1];
  const post3 = posts?.[2];
  const post4 = posts?.[3];
  const post5 = posts?.[4];
  const post6 = posts?.[5];

  return (
    <>
      <div className="container flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div
            role="main"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
              This Week Blogs
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              {"Here's what I've been up to recently."}
            </p>
          </div>

          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <WeeklyPostSmall custom="sm:w-1/2 relative" post={post1} />

                <WeeklyPostSmall
                  custom="sm:w-1/2 sm:mt-0 mt-4 relative"
                  post={post2}
                />
              </div>
              <WeeklyPostBig custom post={post3} />
            </div>

            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <WeeklyPostBig post={post4} />

              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <WeeklyPostSmall custom="relative w-full" post={post5} />
                <WeeklyPostSmall
                  custom="relative w-full sm:mt-0 mt-4"
                  post={post6}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
