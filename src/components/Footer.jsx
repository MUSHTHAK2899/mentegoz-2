import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-teal-900  h-full md:h-[400px] w-full p-16 gap-8 mt-14">
      <div className="grid grid-cols-1 md:grid-cols-4 text-white   ">
        <div className="flex flex-col justify-center items-center gap-y-6">
          <img
            className="text-white w-[200px]"
            src="https://www.mentegoz.com/img/logo_white.png"
            alt=""
          />
          <h1 className="text-gray-200">Register for a coffee chat with us</h1>
          <button className="border-2 border-black rounded-full px-8 py-3 font-semibold hover:bg-black duration-300">
            REGISTER NOW
          </button>
          <div className="flex text-black gap-x-8">
            <AiFillFacebook size={25} />
            <AiOutlineInstagram size={25} />
            <AiOutlineTwitter size={25} />
            <AiFillYoutube size={25} />
            <AiFillLinkedin size={25} />
          </div>
        </div>
        <div className="flex flex-col text-center mt-2">
          <h1 className="text-2xl underline underline-offset-[10px] decoration-black">
            Quick links
          </h1>
          <div className="flex flex-col gap-y-1 mt-4 text-gray-200">
            <h2>About Us</h2>
            <h2>Services</h2>
            <h2>Products</h2>
            <h2>Careers</h2>
            <h2>Privacy Policy</h2>
            <h2>Contact Us</h2>
            <h2>Sitemap</h2>
          </div>
        </div>
        <div className="flex flex-col text-center mt-2">
          <h1 className="text-2xl underline underline-offset-8 decoration-black">
            India
          </h1>
          <div className="flex flex-col gap-y-1 mt-4 text-gray-200">
            <h2>3rd Floor, Meenakshi Tower, Nadakkavu</h2>
            <h2>Nadakkavu Road, Eranhipalam,</h2>
            <h2> Kozhikode,Kerala -673006</h2>
            <h2>Mobile: +91 7012 727 621</h2>
            <h2>Mobile: +91 7012 224 271</h2>
            <h2>info@mentegoz.com</h2>
          </div>
        </div>
        <div className="flex flex-col text-center mt-2">
          <h1 className="text-2xl underline underline-offset-8 decoration-black">
            Qatar
          </h1>
          <div className="flex flex-col gap-y-1 mt-4 text-gray-200">
            <h2>5th Floor, Sky Tower,Masaq</h2>
            <h2>Doha, Qatar</h2>
            <h2>Mobile: +974 30652376</h2>
            <h2>Careers</h2>
            <h2>Mobile: +974 50902121</h2>
            <h2>feedonfeeds@gmail.com</h2>
          </div>
        </div>
      </div>
      <div className=" border mt-10 border-black"></div>
      <h1 className="text-center text-gray-200 mt-3">
        © 2022 Mentegoz Technologies
      </h1>
    </div>
  );
};

export default Footer;
