import Link from "next/link";

export default function Navbar(): JSX.Element {
  return (
    <header>
      <ul className="list-none flex justify-between p-[10px] mx-[90px] bg-red-400 rounded-md">
        <div className="w-[30%] text-black ps-5">M</div>
        <div className="w-[50%] flex gap-[50px]">
          <Link href={"/"}>
            <li>Movies</li>
          </Link>
          <Link href={"/tv_show"}>
            <li>TV Show</li>
          </Link>
        </div>
      </ul>
    </header>
  );
}
