
import {
    FaFacebook,
    FaGithub,
    FaGoogle,
    FaInstagram,
    FaTwitter,
  } from "react-icons/fa";
  import qZone1 from "../../../assets/qZone1.png";
  import qZone2 from "../../../assets/qZone2.png";
  import qZone3 from "../../../assets/qZone3.png";
  
  const RightSideNav = () => {
    return (
      <div className=" ">
        <div className="min-h-[134px] ">
          <h2 className="text-xl font-semibold mb-3"> Login With </h2>
          <button className="border w-full p-1 mb-1 rounded-md flex justify-center items-center gap-2">
            <span>
              <FaGoogle></FaGoogle>
            </span>
            Login With Google
          </button>
          <button className="border w-full p-1 rounded-md flex justify-center items-center gap-2">
            <span>
              <FaGithub></FaGithub>
            </span>
            Login With Github
          </button>
        </div>
        <div className="min-h-[190px]  mb-8">
          <h2 className="text-xl font-semibold mb-3"> Find Us On </h2>
          <button className="border w-full p-4 rounded-t-lg flex pl-3 items-center gap-2">
            <span>
              <FaFacebook></FaFacebook>
            </span>
            Facebook
          </button>
          <button className="border-x w-full p-4  flex pl-3 items-center gap-2">
            <span>
              <FaTwitter></FaTwitter>
            </span>
            Twitter
          </button>
          <button className="border w-full p-4 rounded-b-lg flex pl-3 items-center gap-2">
            <span>
              <FaInstagram></FaInstagram>
            </span>
            Instagram
          </button>
        </div>
        <div className="min-h-[780px] ">
          <h2 className="text-xl font-semibold mb-3">Q-Zone </h2>
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    );
  };
  
  export default RightSideNav;
  