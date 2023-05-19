import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="lg:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0 ">
          <Link href="/">
            <Image src="/logo.svg" alt="nav logo" width={150} height={200} />
          </Link>
        </div>
        <div className="shrink w-80 sm:order-2 ">
          <Link href={'/'}>
            <p className="font-bold uppercase text-3xl font-expletus italic">
              {"Nam's Blog"}
            </p>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center font-openSans ">
          <div className="flex gap-6">
            <Link href={'/allposts'}>
              <p className="hover:underline hover:underline-offset-4 wavy">
                Archive
              </p>
            </Link>

            <Link href={'/contact'}>
              <p className="hover:underline hover:underline-offset-4 wavy">
                Contact
              </p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
