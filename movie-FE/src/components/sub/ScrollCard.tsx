import { MovieType } from "@/util/MovieType";
import Link from "next/link";

export default function ScrollCard(prop: MovieType): JSX.Element {
  return (
    <Link
      className="min-w-[170px] max-h-[240px] flex justify-center items-center"
      href={`../movie/${prop._id}`}
    >
      <div className="w-full h-full ">
        <picture className=" h-[91%] block">
          <img
            src={prop.poster}
            className="w-full h-[200px] object-cover"
            alt=""
          />
        </picture>
        <div className="w-full h-[20%] flex items-center justify-center text-sm  text-black-400 box-border py-4">
          <p>{prop.title}</p>
        </div>
      </div>
    </Link>
  );
}
