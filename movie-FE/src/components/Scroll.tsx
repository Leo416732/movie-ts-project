import { MovieType } from "@/util/MovieType";
import ScrollCard from "./sub/ScrollCard";

export default function Scroll({ prop: prop }: { prop: MovieType[] }) {
  return (
    <>
      <div className="w-full gap-10 h-[340px] flex overflow-scroll">
        {prop.map((movie: MovieType, index: number) => (
          <div className="" key={index}>
            <ScrollCard {...movie} />
          </div>
        ))}
      </div>
    </>
  );
}
