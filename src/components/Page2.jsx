import { Container } from "./Container";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { useState } from "react";
export const ServicePage = () => {
  // const [animeOn, setAnimeOn] = useState(false);
  // const handleAnime = (dets) => {
  //   setAnimeOn(true);
  //   // gsap.to(".animateHover", {
  //   //   x: dets.nativeEvent.offsetX,
  //   //   y: dets.nativeEvent.offsetY,
  //   //   transition: 0.5,
  //   //   duration: 0.5,
  //   // });
  // };
  // const handleLeave = () => {
  //   setAnimeOn(false);
  //   gsap.to(".animateHover", {
  //     x: 0,
  //     y: 0,
  //     transition: 0.5,
  //     duration: 0.5,
  //   });
  // };
  return (
    <div className="mt-12 md:mt-24 pb-20">
      <Container className={""}>
        <div className="">
          <div>
            <div className="flex md:flex-row flex-col items-start md:items-center gap-4 md:gap-8 scrollText">
              <h1 className="text-xl md:2xl lg:text-4xl font-extrabold text-black bg-[#b8f55c] px-2 p-1 rounded-md">
                Services
              </h1>
              <p className="mt-3 text-sm md:text-[16px] text-gray-600 font-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                sunt fuga commodi <br /> ipsam vero doloremque temporibus
                aspernatur in veniam? Tempora.
              </p>
            </div>
            <div className="py-7 mt-12 md:py-12">
              <div className="flex lg:flex-row flex-col items-center justify-between">
                <div className="page2Div1 w-full small:w-[500px]  relative md:h-auto h-72 lg:w-[47%] flex md:flex-row flex-col items-center md:justify-between  customShadow p-5 md:p-7 lg:p-10 rounded-2xl ">
                  <div className="md:w-[50%]  ">
                    <h1 className="pb-3 md:pb-20 text-xl md:text-3xl font-bold ">
                      <span className="bg-[#b8f55c] px-2 rounded-md">
                        Search ingine{" "}
                      </span>
                      <br />
                      <span className="px-2 bg-[#b8f55c] rounded-md">
                        optomize
                      </span>
                    </h1>
                    <div
                      className={`flex gap-4 items-center mt-2 md:mt-4 md:relative  bottom-5 absolute`}
                    >
                      <div
                        className={`px-1.5 md:px-3 py-1.5 md:py-3  rounded-full bg-gray-800 text-white  `}
                      >
                        <FaArrowRight className="-rotate-45 text-base md:text-xl" />
                      </div>
                      <p className="font-bold text-sm md:text-[16px] hoverEffect cursor-pointer ">
                        Learn more
                      </p>
                    </div>
                  </div>
                  <div>
                    <img className="md:w-auto max-w-60" src="/one.png" alt="" />
                  </div>
                </div>
                {/* box2 */}
                <div className="page2Div2 w-full customShadow2  bg-gray-800 small:w-[500px] relative md:h-auto h-72 lg:w-[47%]  lg:mt-0 mt-10 flex md:flex-row flex-col items-center md:justify-between   p-5 md:p-7 lg:p-10 rounded-2xl ">
                  <div className="md:w-[50%]  ">
                    <h1 className="pb-3 md:pb-20 text-xl md:text-3xl font-bold ">
                      <span className="bg-white px-2 rounded-md">
                        Search ingine{" "}
                      </span>
                      <br />
                      <span className="px-2 bg-white rounded-md">optomize</span>
                    </h1>
                    <div
                      className={`flex gap-4 items-center mt-2 md:mt-4 md:relative  bottom-5 absolute`}
                    >
                      <div
                        className={`px-1.5 md:px-3 py-1.5 md:py-3  rounded-full bg-white text-white  `}
                      >
                        <FaArrowRight className="-rotate-45 text-base md:text-xl text-gray-800" />
                      </div>
                      <p className="font-bold text-sm md:text-[16px] hoverEffect cursor-pointer text-white">
                        Learn more
                      </p>
                    </div>
                  </div>
                  <div>
                    <img className="md:w-auto max-w-60" src="/rightImg.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <div className="flex lg:flex-row flex-col items-center justify-between">
                {/* box3 */}
                <div className="page2Div3  w-full customShadow2  bg-gray-800 small:w-[500px] relative md:h-auto h-72 lg:w-[47%]   flex md:flex-row flex-col items-center md:justify-between   p-5 md:p-7 lg:p-10 rounded-2xl ">
                  <div className="md:w-[50%]  ">
                    <h1 className="pb-3 md:pb-20 text-xl md:text-3xl font-bold ">
                      <span className="bg-white px-2 rounded-md">
                        Search ingine{" "}
                      </span>
                      <br />
                      <span className="px-2 bg-white rounded-md">optomize</span>
                    </h1>
                    <div
                      className={`flex gap-4 items-center mt-2 md:mt-4 md:relative  bottom-5 absolute`}
                    >
                      <div
                        className={`px-1.5 md:px-3 py-1.5 md:py-3  rounded-full bg-white text-white  `}
                      >
                        <FaArrowRight className="-rotate-45 text-base md:text-xl text-gray-800" />
                      </div>
                      <p className="font-bold text-sm md:text-[16px] hoverEffect cursor-pointer text-white">
                        Learn more
                      </p>
                    </div>
                  </div>
                  <div>
                    <img className="md:w-auto max-w-60" src="/rightImg.png" alt="" />
                  </div>
                </div>
                {/* box4 */}
                <div className="page2Div4 lg:mt-0 mt-10 w-full small:w-[500px]  relative md:h-auto h-72 lg:w-[47%] flex md:flex-row flex-col items-center md:justify-between  customShadow p-5 md:p-7 lg:p-10 rounded-2xl ">
                  <div className="md:w-[50%]  ">
                    <h1 className="pb-3 md:pb-20 text-xl md:text-3xl font-bold ">
                      <span className="bg-[#b8f55c] px-2 rounded-md">
                        Search ingine{" "}
                      </span>
                      <br />
                      <span className="px-2 bg-[#b8f55c] rounded-md">
                        optomize
                      </span>
                    </h1>
                    <div
                      className={`flex gap-4 items-center mt-2 md:mt-4 md:relative  bottom-5 absolute`}
                    >
                      <div
                        className={`px-1.5 md:px-3 py-1.5 md:py-3  rounded-full bg-gray-800 text-white  `}
                      >
                        <FaArrowRight className="-rotate-45 text-base md:text-xl" />
                      </div>
                      <p className="font-bold text-sm md:text-[16px] hoverEffect cursor-pointer ">
                        Learn more
                      </p>
                    </div>
                  </div>
                  <div>
                    <img className="md:w-auto max-w-40" src="/three.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
