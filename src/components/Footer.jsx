import { Container } from "./Container";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
export const Footer = () => {
  return (
    <div className="py-20">
      <Container>
        <div>
          <div className="flex items-center gap-3 footerText footerText">
            <h1 className="text-xl md:2xl lg:text-4xl font-extrabold text-black bg-[#b8f55c] px-2 p-1 rounded-md">
              Case study
            </h1>
            <p className="text-sm md:text-[16px] text-gray-600 font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              impedit <br /> reprehenderit fuga, optio sint quod?
            </p>
          </div>
          <div className="px-3 flex small:flex-row flex-col items-center gap-2 md:px-8  py-6 md:py-10 bg-gray-800 rounded-3xl mt-8 md:mt-16 footerDiv1">
            <div className="lg:w-[30%] small:w-[180px] px-2 small:pr-2 md:pr-3 lg:pr-5 small:border-r border-gray-400 ">
              <p className="text-sm md:text-[16px] text-gray-400 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                voluptatibus rem delectus error deleniti similique harum quas
                possimus animi dicta.
              </p>

              <div
                className={`flex gap-4 items-center mt-2 md:mt-8 cursor-pointer`}
              >
                <p className="font-bold text-[12px] md:text-[14px]  cursor-pointer  text-[#b8f55c]">
                  Learn more
                </p>

                <FaArrowRight className="-rotate-45 text-[12px] md:text-[14px] text-[#b8f55c] font-normal" />
              </div>
            </div>
            <div className="lg:w-[30%] small:w-[180px] px-2 small:pr-2 md:pr-3 lg:pr-5 small:border-r border-gray-400">
              <p className="text-sm md:text-[16px] text-gray-400 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                voluptatibus rem delectus error deleniti similique harum quas
                possimus animi dicta.
              </p>

              <div
                className={`flex gap-4 items-center mt-2 md:mt-8 cursor-pointer`}
              >
                <p className="font-bold text-[12px] md:text-[14px]  cursor-pointer  text-[#b8f55c]">
                  Learn more
                </p>

                <FaArrowRight className="-rotate-45 text-[12px] md:text-[14px] text-[#b8f55c] font-normal" />
              </div>
            </div>
            <div className="lg:w-[30%] small:w-[180px] px-2 small:pr-2 md:pr-3 lg:pr-5 ">
              <p className="text-sm md:text-[16px] text-gray-400 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                voluptatibus rem delectus error deleniti similique harum quas
                possimus animi dicta.
              </p>

              <div
                className={`flex gap-4 items-center mt-2 md:mt-8 cursor-pointer`}
              >
                <p className="font-bold text-[12px] md:text-[14px]  cursor-pointer  text-[#b8f55c]">
                  Learn more
                </p>

                <FaArrowRight className="-rotate-45 text-[12px] md:text-[14px] text-[#b8f55c] font-normal" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
