import { Button } from "@mui/base";

function Content() {
  return (
    <div className="mt-40 mb-60">
      <div className="flex flex-col items-center pl-16 pr-24 mt-8">
        <img
          src="/assets/img_1_12_b3a770.png"
          className="h-72 w-72 box-border"
          alt="Logo"
        />
        <div className="flex flex-col items-center mt-8">
          <p className="font-Quantico text-6xl mb-10 text-white m-0 text-center">
            Newton School Coding Club
          </p>
          <p className="font-Quantico text-6xl mb-8  text-[rgba(38,232,232,1)] mt-2 m-0 text-center">
            SRMIST
          </p>
          <p className="font-Quantico text-5xl mb-40 text-[rgba(38,232,232,1)] m-0 text-center">
            Coder's Vertex
          </p>
          <Button className="bg-transparent font-Inter text-6xl text-white mt-6 min-w-[499px] h-28 w-[499px] rounded-full border-4 border-[rgba(108,229,229,1)]">
            About Us
          </Button>
        </div>
        <div className="bg-[rgb(82,82,82)] mt-60 w-[66.1875rem] h-[30rem]  rounded-tl-[1.25rem] rounded-tr-[1.25rem] rounded-br-[1.25rem] rounded-bl-[1.25rem]" />
      </div>
    </div>
  );
}

export default Content;
