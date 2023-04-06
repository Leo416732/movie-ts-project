import Card from "@/components/sub/Card";
import Dropdown from "@/components/sub/Dropdown";
import { MovieType } from "@/util/MovieType";
import axios from "axios";
import { useState } from "react";

export default function TV(props: { shows: MovieType[] }): JSX.Element {
  const { shows } = props;
  const [tvShows, setTvShows] = useState<MovieType[] | null>(shows);
  function moviesHandle() {
    axios
      .get(
        `http://localhost:5005/movies/tv?limit=${
          tvShows && tvShows.length + 10
        }`
      )
      .then((res) => setTvShows(tvShows && [...tvShows, ...res.data]));
  }

  return (
    <>
      <div className="flex my-7 container mx-auto">
        <h1 className="text-3xl ">BEST TV SHOWS</h1>
        <Dropdown current="TV SHOWS" />
      </div>

      <div className="flex container mx-auto flex-wrap justify-between">
        {tvShows?.map((show, index) => (
          <Card movie={show} index={index} />
        ))}
      </div>
      <div className="w-full flex justify-center mt-5">
        <button
          onClick={moviesHandle}
          className="rounded-full mb-5 bg-gray-300 w-28 h-10 "
        >
          Load More
        </button>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:5005/movies/tv?limit=10");
  const shows = res.data;

  return {
    props: {
      shows: shows,
    },
  };
}
