import Scroll from "@/components/Scroll";
import { MovieType } from "@/util/MovieType";
import axios from "axios";
import Link from "next/link";

export default function Home(props: {
  movies: MovieType[];
  shows: MovieType[];
}): JSX.Element {
  const { movies } = props;
  const { shows } = props;

  return (
    <div>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white h-[35vh] pt-[120px] text-center text-3xl">
        COMING SOON SLIDER
      </div>
      <div className="container mx-auto max-w-screen-xl p-10 min-h-[40vh] flex  flex-wrap justify-between gap-5">
        <div className="flex justify-between w-full">
          <h1 className="border-l-4 text-2xl border-red-600">
            NEW & UPCOMING MOVIES
          </h1>
          <Link href="../browse/movies" className="text-blue-600">
            view all
          </Link>
        </div>
        <Scroll prop={movies} />
      </div>
      <div className="container mx-auto max-w-screen-xl p-10 min-h-[40vh] flex  flex-wrap justify-between gap-5">
        <div className="flex justify-between w-full">
          <h1 className="border-l-4 text-2xl border-red-600">
            NEW & UPCOMING TV SHOWS
          </h1>
          <Link href="../browse/tv-show" className="text-blue-600">
            view all
          </Link>
        </div>
        <Scroll prop={shows} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:5005/movies?limit=15");
  const movies = res.data;
  const resTv = await axios.get("http://localhost:5005/movies/tv?limit=15");
  const shows = resTv.data;

  return {
    props: {
      movies: movies,
      shows: shows,
    },
  };
}
