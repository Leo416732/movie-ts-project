import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Dropdown(props: {
  current: string | string[] | undefined;
}): JSX.Element {
  const { current } = props;
  const [dropdown, setDropdown] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div>
      <button
        className="border border-grey-500 p-2 ms-7 px-3 rounded flex justify-around  hover:border-black sm:hidden md:flex "
        onClick={() => setDropdown(!dropdown)}
      >
        {current}
        <picture>
          {" "}
          <img
            className="w-[20px] h-[20px] my-auto"
            src="https://t3.ftcdn.net/jpg/04/74/32/94/240_F_474329418_AiG36Hye8DachWn4YOl8gv8X73WH8CVv.jpg"
            alt=""
          />
        </picture>
      </button>
      <div className="relative">
        {dropdown && (
          <div
            className="shadow-2xl shadow-black absolute bg-white w-[500px] top-3 left-7 rounded-md h-[300px] p-5 sm:hidden md:hidden lg:inline "
            aria-disabled
          >
            <h2 className="text-2xl text-center mb-2">{current}</h2>
            <div
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => router.push("../browse/movies")}
              className={
                current == "movies"
                  ? "mb-3 w-[100%] p-3 bg-blue-600 rounded-[10px] text-white cursor-pointer"
                  : "mb-3 w-full p-3 hover:text-blue-600 rounded-[10px] text-black cursor-pointer"
              }
            >
              IN THEATERS
            </div>
            <div
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => router.push("../browse/tv-show")}
              className={
                current == "tv-show"
                  ? "mb-3 p-3 bg-blue-600 rounded-[10px] text-white cursor-pointer"
                  : "mb-3 p-3 rounded-[10px] text-black hover:text-blue-600 cursor-pointer"
              }
            >
              TV SHOWS
            </div>
            <div
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => router.push("../browse/news")}
              className={
                current == "news"
                  ? "mb-3 p-3 bg-blue-600 rounded-[10px] text-white cursor-pointer"
                  : "mb-3 p-3 rounded-[10px] text-black hover:text-blue-600 cursor-pointer"
              }
            >
              NEWS
            </div>
          </div>
        )}
      </div>
      <div className="md:hidden sm:flex mt-6">
        <Link
          className={
            current == "IN THEATERS"
              ? "w-[150px] border-b-4 border-black text-center"
              : "text-center w-[150px]"
          }
          href="../movies"
        >
          IN THEATERS
        </Link>
        <Link
          className={
            current == "TV SHOWS"
              ? "w-[150px] border-b-4 border-black text-center"
              : "text-center w-[150px]"
          }
          href="../tv"
        >
          TV SHOWS
        </Link>
        <Link
          className={
            current == "NEWS"
              ? "w-[150px] border-b-4 border-black text-center"
              : "text-center w-[150px]"
          }
          href="../news"
        >
          NEWS
        </Link>
      </div>
    </div>
  );
}
