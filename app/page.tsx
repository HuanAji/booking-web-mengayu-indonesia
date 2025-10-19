import Image from "next/image";
import Hero from "@/components/hero";
import Main from "@/components/main";

export default function Home() {
  return (
    <div className="">
      <h1>Home Page</h1>
      <Hero />
      <div className="mt-16 ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold uppercase">Room & Rates</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            laboriosam!
          </p>
        </div>
        <Main />
      </div>
    </div>
  );
}
