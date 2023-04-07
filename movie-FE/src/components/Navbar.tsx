import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function Header(): JSX.Element {
  const router = useRouter();
  function searchHandle(e: FormEvent): void {
    e.preventDefault();

    if ((e.target as HTMLButtonElement).value) {
      router.push(`../search/${(e.target as HTMLButtonElement).value}`);
    }
  }
  return (
    <div className="w-full bg-red-600">
      <div className="container mx-auto h-full p-4 flex justify-between items-center flex-wrap ">
        <Link href="/">
          <div>
            <picture className="block h-[40px] col-2/12">
              <img
                src="https://images.fandango.com/cms/assets/bf631b80-bf47-11ed-a868-adceb8892ad3--rt25-logo-mainnav-322x100.png"
                alt=""
                className="h-full"
              />
            </picture>
          </div>
        </Link>
        <form
          className="relative"
          onSubmit={(e: React.FormEvent) => searchHandle(e)}
        >
          <input
            type="text"
            name="search"
            className="bg-red-800 text-white placeholder:text-white border-2 rounded-full px-5 py-2 ps-[40px] w-[400px]"
            placeholder="Search movies, TV, actors, more..."
          />
          <svg
            className="w-[18px] top-[13px] left-4 absolute "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 32"
          >
            <path
              fill="white"
              d="M20.576 14.848q0-3.296-2.336-5.632t-5.664-2.368-5.664 2.368-2.336 5.632 2.336 5.664 5.664 2.336 5.664-2.336 2.336-5.664zm9.152 14.88q0 .928-.704 1.6t-1.6.672q-.96 0-1.6-.672l-6.112-6.112q-3.2 2.208-7.136 2.208-2.56 0-4.896-.992t-4-2.688-2.688-4T0 14.848t.992-4.864T3.68 5.952t4-2.688 4.896-.992 4.896.992 4 2.688 2.688 4.032.992 4.864q0 3.936-2.208 7.136l6.112 6.112q.672.672.672 1.632z"
            />
          </svg>
        </form>
        <div className="flex gap-4">
          <Link
            className="py-3 px-5 rounded-xl hover:bg-white hover:text-black text-white font-bold"
            href="../browse/movies"
          >
            MOVIES
          </Link>
          <Link
            className="py-3 px-5 rounded-xl hover:bg-white hover:text-black text-white font-bold"
            href="../browse/tv-show"
          >
            TV SHOWS
          </Link>

          <Link
            className="py-3 px-5 rounded-xl hover:bg-white hover:text-black text-white font-bold"
            href="../browse/news"
          >
            NEWS
          </Link>
          <Link
            className="py-3 px-5 rounded-xl hover:bg-white hover:text-black text-white font-bold"
            href="../browse/show"
          >
            SHOWTIMES
          </Link>
        </div>
      </div>
    </div>
  );
}
