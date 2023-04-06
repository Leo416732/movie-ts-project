import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Dropdown(props: { current: string }): JSX.Element {
  const { current } = props;
  const [dropdown, setDropdown] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div>
      <button
        className="border border-grey-500 p-2 ms-7 px-3 rounded flex justify-around  hover:border-black"
        onClick={() => setDropdown(!dropdown)}
      >
        {current}
        <img
          className="w-[20px] h-[20px] my-auto"
          src="https://t3.ftcdn.net/jpg/04/74/32/94/240_F_474329418_AiG36Hye8DachWn4YOl8gv8X73WH8CVv.jpg"
          alt=""
        />
      </button>
      <div className="relative">
        {dropdown && (
          <div
            className="shadow-2xl shadow-black absolute bg-white w-[500px] top-3 left-7 rounded-md h-[300px] p-5"
            aria-disabled
          >
            <h2 className="text-2xl text-center mb-2">{current}</h2>

            <div
              onClick={() => router.push("../movies")}
              className={
                current == "IN THEATERS"
                  ? "mb-3 w-[100%] p-3 bg-blue-600 rounded-[10px] text-white cursor-pointer"
                  : "mb-3 w-full p-3 rounded-[10px] text-black cursor-pointer"
              }
            >
              IN THEATERS
            </div>
            <div
              onClick={() => router.push("../tv")}
              className={
                current == "TV SHOWS"
                  ? "mb-3 p-3 bg-blue-600 rounded-[10px] text-white cursor-pointer"
                  : "mb-3 p-3 rounded-[10px] text-black hover:text-blue-600 cursor-pointer"
              }
            >
              TV SHOWS
            </div>
            <div
              onClick={() => router.push("../news")}
              className={
                current == "NEWS"
                  ? "mb-3 p-3 bg-blue-600 rounded-[10px] text-white cursor-pointer"
                  : "mb-3 p-3 rounded-[10px] text-black hover:text-blue-600 cursor-pointer"
              }
            >
              NEWS
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
