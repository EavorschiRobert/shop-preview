import React from "react";
import restaurant from "..//../public/images/pexels-reneasmussen-1581384.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot} from '../utils/logo'
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <>
      <div className="w-full flex px-4 pt-20">
        <div className="flex-1 pt-10">
          <p>CIAO</p>
        </div>
        <motion.img
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
          src={restaurant}
          alt="restaurant"
          className="w-1/2 rounded-tl-[20%] rounded-br-[20%]"
        />
      </div>
      <div className="bg-secondary h-full mt-[-80px]">
        <div className="text-xs sm:text-sm flex justify-between gap-4 p-4 w-1/2 text-action">
          <div className="flex gap-2">
          <FontAwesomeIcon icon={faLocationDot}/>
          <p className="">Indirizzo</p>
          </div>
          <p>+39 9999 999 99</p>
        </div>

        CIAO
      </div>
    </>
  );
};

export default Home;
