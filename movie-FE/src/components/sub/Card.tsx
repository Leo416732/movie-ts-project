import { MovieType } from "@/util/MovieType";
import Link from "next/link";
import Empty from "./Empty";

export default function Card(props: {
  movie: MovieType;
  index: any;
}): JSX.Element {
  const { movie } = props;
  const { index } = props;

  return (
    <Link
      href={`../movie/${movie._id}`}
      className="min-w-[200px] w-[20%] hover:bg-slate-200 p-3 rounded-md"
      key={index}
    >
      {" "}
      {movie.poster ? (
        <picture>
          <img
            className="w-[250px] h-[320px] object-cover"
            src={movie.poster}
            alt=""
          />
        </picture>
      ) : (
        <Empty />
      )}
      <p className="">{movie.title}</p>
    </Link>
  );
}
