import Dropdown from "@/components/sub/Dropdown";
import { MovieType } from "@/util/MovieType";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import Pages from "../../components/Pages";

export default function Movie(props: {
  getmovies: MovieType[];
  newestmovies: MovieType[];
  ratemovies: MovieType[];
}): JSX.Element {
  const router = useRouter();
  const current: string | string[] | undefined = router.query.pages;

  const { getmovies, newestmovies, ratemovies } = props;

  return (
    <>
      <div className="md:flex my-7 container mx-auto">
        <h1 className="text-3xl">BEST IN {current}</h1>
        <Dropdown current={current} />
      </div>
      <Pages
        getmovies={getmovies}
        newestmovies={newestmovies}
        ratemovies={ratemovies}
      />
    </>
  );
}

export const getStaticPaths = () => {
  const paths = ["movies", "tv-show", "news"].map((pages: string) => ({
    params: {
      pages: pages,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axios.get(
    `http://localhost:5005/${params?.pages}?limit=10`
  );
  const movies = res.data;
  const resNew = await axios.get(
    `http://localhost:5005/${params?.pages}/newest?limit=10`
  );
  const newestmovies = resNew.data;
  const resRate = await axios.get(
    `http://localhost:5005/${params?.pages}/rating?limit=10`
  );
  const ratemovies = resRate.data;
  return {
    props: {
      getmovies: movies,
      newestmovies: newestmovies,
      ratemovies: ratemovies,
    },
  };
};
