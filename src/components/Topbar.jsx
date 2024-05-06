import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../public/images/7841103.jpg";
import { faBars, faCaretDown} from "../utils/logo";
import { useState } from "react";
import Links from "./Links";
import { AnimatePresence, motion } from "framer-motion";
const Topbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleMenu = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <div className="bg-primary/80 w-full fixed">
        <div className=" flex w-full justify-between px-8 py-4 ">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-12 rounded-full" />
        <div className="xs-max-w-[100px]">
          <h2 className="font-bold text-xl m-0 p-0 ">Minimarket</h2>
          <h3 className="text-xs">RESTAURANT</h3>
        </div>
      </div>

      <div className="flex items-center gap-4">
        
        <motion.div
          animate={{ rotate: toggle ? -90 : 0 }}
          transition={{ bounce: 0.5, type: "spring" }}
        >
          <FontAwesomeIcon
            icon={faCaretDown}
            onClick={handleToggleMenu}
            className="block sm:hidden"
            style={{ color: "#102C57", rotate: '90deg'}}
          />
        </motion.div>
        <div className="hidden sm:flex gap-8">
          <AnimatePresence>
            <Links />
          </AnimatePresence>
        </div>
      </div>
    </div>
    <AnimatePresence>
          {toggle && (
            <div className="sm:hidden">
              <Links />
            </div>
          )}
        </AnimatePresence>
    </div>

  );
};

export default Topbar;
