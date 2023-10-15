import { RiFacebookFill } from "react-icons/ri";
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineCopyright,
} from "react-icons/ai";

const Foot = () => {
  return (
    <div className=" flex items-center py-10 gap-5 flex-col w-full bg-[#25262b] text-white">
      <ul className=" flex gap-5 flex-wrap text-2xl">
        <li className="logo-container group">
          <span className="logo-border" />
          <RiFacebookFill className="logo" />
        </li>

        <li className="logo-container group">
          <span className="logo-border" />
          <AiOutlineTwitter className="logo" />
        </li>

        <li className="logo-container group">
          <span className="logo-border" />
          <AiOutlineInstagram className="logo" />
        </li>

        <li className="logo-container group">
          <span className="logo-border" />
          <FaTelegramPlane className="logo" />
        </li>

        <li className="logo-container group">
          <span className="logo-border" />
          <FaLinkedinIn className="logo" />
        </li>
      </ul>
      <p className=" flex items-center text-sm sm:text-base">
        <AiOutlineCopyright className="text-lg mr-1 mb-[1px]" />
        Win Htet Zaw | All rights Reserved
      </p>
    </div>
  );
};

export default Foot;
