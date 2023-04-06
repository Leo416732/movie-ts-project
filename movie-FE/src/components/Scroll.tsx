import { MovieType } from "@/util/MovieType";
import Link from "next/link";
import ScrollCard from "./sub/ScrollCard";

export default function Scroll({ prop }: any) {
  return (
    <>
      <div className="w-full gap-10 h-[300px] flex overflow-scroll">
        {prop?.map((movie: MovieType, index: number) => (
          <div className="" key={index}>
            <ScrollCard {...movie} />
          </div>
        ))}
      </div>
    </>
  );
}
