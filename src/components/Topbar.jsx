import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../public/assets/WhatsApp Image 2024-05-09 at 16.52.25.jpeg";
import { faBars, faCaretDown } from "../utils/icons";
import { useState } from "react";
import Links from "./Links";
import { AnimatePresence, motion } from "framer-motion";
const Topbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleMenu = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <header className="bg-primary/80 w-full fixed z-40">
      <div className=" flex w-full justify-between px-8 py-4 ">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-12 rounded-full" />
          <div className="xs-max-w-[100px]">
            <h2 className="font-bold text-xl m-0 p-0 ">Minimarket Anastasia</h2>
            <h3 className="text-xs">Local Shop</h3>
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
              style={{ color: "#102C57", rotate: "90deg" }}
            />
          </motion.div>
          <div className="hidden sm:flex gap-8 relative z-40">
            <AnimatePresence>
              <Links />
            </AnimatePresence>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {toggle && (
          <AnimatePresence>
            <div className="sm:hidden">
              <Links />
            </div>
          </AnimatePresence>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Topbar;
