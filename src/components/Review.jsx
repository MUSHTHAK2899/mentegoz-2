import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { RiDoubleQuotesR } from "react-icons/ri";
import { review } from "../data";
import { Pagination } from "swiper";

const Review = () => {
  return (
    <>
      <div className="container mx-auto p-5 mt-14 font-mono">
        <div className="flex relative ">
          <img
            alt="gallery"
            className="absolute w-full h-screen object-cover object-center rounded-lg"
            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="px-8 py-10 relative w-full h-screen  bg-black/70  opacity-100 text-white ">
            <h2 className="tracking-widest text-4xl text-white font-bold  text-center">
              VIEWS OF OUR CLIENTS
            </h2>

            {/* swiper*/}

            <div>
              <Swiper
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="z-[-1] h-[500px] checked:bg-white"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 18,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
              >
                {review.map((item, index) => {
                  const { image, name, role, text } = item;
                  return (
                    <SwiperSlide key={index}>
                      <div
                        className="mt-10 md:w-[500px] h-[700px] ml-5 md:ml-20 ' "
                        key={index}
                      >
                        <p className="p-7 bg-white text-gray-500 rounded-xl md:text-[17px] ">
                          <RiDoubleQuotesR
                            className="animate-bounce text-gray-400"
                            size={30}
                          />
                          {text}
                          <RiDoubleQuotesR
                            className="animate-bounce md:ml-[350px] text-gray-400 "
                            size={30}
                          />
                        </p>
                        <div className="flex mt-5 items-center ">
                          <img
                            className="w-20 h-20 rounded-full border-2 border-white"
                            src={image}
                            alt={name}
                          />
                          <div className="ml-4">
                            <h1 className="font-bold">{name}</h1>
                            <h1 className="text-gray-400">{role}</h1>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
