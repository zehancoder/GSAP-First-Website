import { Container } from "./Container";

export const Page3 = () => {
  return (
    <div>
      <Container className={"py-6 md:py-20"}>
        <div className="flex md:flex-row flex-col items-center justify-between gap-3 page3Animate bg-gray-300 px-5 md:px-8 py-5 rounded-2xl">
          <div className=" md:w-[47%]">
            <h1 className=" text-xl md:text-3xl font-bold text-gray-800">
              Let's make things happen
            </h1>
            <p className="mt-3 md:mt-5 text-sm md:text-[16px] text-gray-600 font-bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium sunt dolore temporibus non quasi sapiente, quas
              placeat aliquid debitis quibusdam.
            </p>
            <button className="text-sm  text-white md:text-[15px] font-extrabold border-2 rounded-lg btnEffect-2 px-4 md:px-5 lg:px-7 py-3 md:py-4 tracking-wide cursor-pointer mt-6 md:mt-12">
              Get you free proposal
            </button>
          </div>
          <div className="w-[47%] ">
            <img
              src="/one.png"
              className="w-48 small:w-62 lg:w-80 mx-auto"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
