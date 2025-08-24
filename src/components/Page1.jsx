import { Container } from "./Container";

export const PageOne = () => {
  const companyImages = [
    "/amazon.png",
    "/dribble.png",
    "/hubspot.png",
    "/netflix.png",
    "/notion.png",
    "/zoom.png",
  ];

  return (
    <div className="lg:px-3 px-4">
      <Container>
        <div className="flex lg:flex-row flex-col items-center gap-3 justify-between mt-6 md:mt-14 lg:mt-20 py-7">
          <div className="w-full lg:w-[45%] lg:px-0 px-4 pageOneRight">
            <h1 className="text-4xl md:text-6xl font-medium ">
              Nevageting the future landscape for success
            </h1>
            <p className="text-sm md:text-[16px] font-medium text-gray-600 tracking-wide mt-4 md:mt-8 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Sint laudantium inventore minus, aspernatur <br /> asperiores
              earum cum, voluptas beatae corporis quibusdam <br /> quis error
              totam molestias. Nobis!
            </p>
            <button className="text-sm  text-white md:text-[15px] font-extrabold border-2 rounded-lg btnEffect-2 px-4 md:px-5 lg:px-7 py-3 md:py-4 tracking-wide cursor-pointer mt-6 md:mt-12">
              Book a Consaltation
            </button>
          </div>
          <div className="w-full lg:py-0 py-4 lg:px-0 px-4 md:w-[45%] pageOneLeft lg:mt-0 mt-6">
            <img src="/rightImg.png" alt="" className="object-contain" />
          </div>
        </div>

        {/* add company logos */}
        <div className="mt-4 md:mt-32 py-3 pb-6 md:py-12">
          <div className="flex gap-3 flex-wrap w-full items-center justify-between ">
            {companyImages.map((text, idx) => (
       
                <img
                  key={idx}
                  src={text}
                  alt=""
                  className={`w-28 lg:mt-0 mt-4  lg:w-32 links-2 `}
                />

            ))}
          </div>
          <div>

          </div>
        </div>
      </Container>
    </div>
  );
};
