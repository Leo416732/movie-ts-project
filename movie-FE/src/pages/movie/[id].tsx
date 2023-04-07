import axios from "axios";
import { MovieType } from "@/util/MovieType";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export default function Movie({
  data: movie,
}: {
  data: MovieType[];
}): JSX.Element {
  return (
    <div className="flex m-5 p-5 gap-9 w-full flex-wrap">
      <picture className="ms-12 min-w-[300px] max-w-[400px] w-[30%]">
        <img
          className="w-full max-h-[550px] min-h-[300px]"
          src={movie[0].poster}
          alt=""
        />
      </picture>
      <div className="ms-5 w-[50%] min-w-[500px]">
        {" "}
        <h1 className="text-3xl ms-5 font-bold">{movie[0].title}</h1>
        <p className="ms-5 mt-5 text-slate-500">{movie[0].fullplot}</p>
        <h5 className="ms-5 mt-5 text-slate-800">Movie info</h5>
        <div>
          <p className="ms-5 mt-5 text-slate-600">
            Genre: {movie[0].genres.join(",  ")}
          </p>
          <p className="text-slate-600 ms-5 mt-2">
            Rating: {movie[0].tomatoes.viewer.rating}
          </p>
          <p className="text-slate-600 ms-5 mt-2">
            Language: {movie[0].languages}
          </p>
          <p className="text-slate-600 ms-5 mt-2">
            Directors: {movie[0].directors?.join(",  ")}
          </p>
          <p className="text-slate-600 ms-5 mt-2">
            Writers: {movie[0].writers?.join(",  ")}
          </p>
          <p className="text-slate-600 ms-5 mt-2">
            Release Date: {movie[0].year}
          </p>
          <p className="text-slate-600 ms-5 mt-2">
            Run Time: {movie[0].runtime}
          </p>
          <p className="text-slate-600 ms-5 mt-2">
            Cast: {movie[0].cast.join(",  ")}
          </p>
          <p className="text-slate-600 ms-5 mt-2">
            Wins: {movie[0].awards.wins}
          </p>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`http://localhost:5005/movies-ids`);
  const resJson = await res.data;
  const paths = await resJson.map((id: { _id: string }) => ({
    params: {
      id: id._id,
    },
  }));
  console.log("paths", paths);

  return {
    paths,
    fallback: "blocking",
  };
};
interface MovieProps {
  data: MovieType | null;
}

export const getStaticProps: GetStaticProps<MovieProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const res = await axios.get(`http://localhost:5005/movie?id=${params?.id}`);
  const movie = await res.data;

  return {
    props: {
      data: movie,
    },
  };
};
