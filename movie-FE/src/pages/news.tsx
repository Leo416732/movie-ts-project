import Dropdown from "@/components/sub/Dropdown";

export default function News(): JSX.Element {
  return (
    <>
      <div className="md:flex my-7 container mx-auto">
        <h1 className="text-3xl ">BEST IN NEWS</h1>
        <Dropdown current="NEWS" />
      </div>
      <div className="bg-gradient-to-r py-[20%] h-[90vh] text-white from-green-400 to-blue-500 text-center text-3xl">
        COMING SOON NEWS
      </div>
    </>
  );
}
