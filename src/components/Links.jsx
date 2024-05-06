import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { links } from "../utils/links";

const Links = () => {
  return (
    <motion.ul
      transition={{
        duration: 1.2,
        delay: 0.2,
        type: "spring",
        bounce: "0.4",
        staggerChildren: 0.05,
      }}
      layout
      className="flex gap-4 text-sm text-action pl-4"
    >
      {links.map((link, index) => (
        <motion.li
          key={index}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 * index }}
          exit={{ x: "-100%", opacity: 0 }}
        >
          <Link to={link.link} className="hover:text-tertiary hover:font-bold">
            {link.name}
          </Link>
        </motion.li>
      ))}
      {/* <li>
        <Link to={"menu"} className="hover:text-tertiary hover:font-bold">
          Menu
        </Link>
      </li>
      <li>
        <Link to={"contact"} className="hover:text-tertiary hover:font-bold">
          Contact us
        </Link>
      </li> */}
    </motion.ul>
  );
};

export default Links;
