import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Scroll from "@/components/Scroll";
import { MovieType } from "@/util/MovieType";
import Card from "@/components/sub/Card";

export default function Seacrh(): JSX.Element {
  const router = useRouter();
  const { search } = router.query;

  const [searchMovies, setSearchMovies] = useState<MovieType[] | null>();
  useEffect(() => {
    axios
      .get(`http://localhost:5005/movie/search?name=${search}`)
      .then((res) => setSearchMovies(res.data));
  }, [search]);

  return (
    <div className="container mx-auto">
      <h2 className="my-[20px] text-2xl">Search Results for : {search}</h2>
      <div className="flex">
        {searchMovies && searchMovies.length > 6 ? (
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          <Scroll prop={searchMovies && searchMovies} />
        ) : (
          searchMovies?.map((movie, index) => (
            // eslint-disable-next-line react/jsx-key
            <Card movie={movie} index={index} />
          ))
        )}
      </div>
    </div>
  );
}
