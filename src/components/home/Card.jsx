/* eslint-disable react/prop-types */
import { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
const Card = ({ item, index }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <motion.li
      ref={ref}
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: isInView ? 0 : "-100%", opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1, delay: 0.3 * index }}
      key={index}
    >
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        className={` pb-4 bg-primary tertiary w-[300px] h-[450px]  rounded-xl drop-shadow-md`}
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className="object-cover bg-cover w-full h-3/4 rounded-2xl"
        />
        <div className="flex flex-col w-full pt-4 px-4 text-sm justify-center items-center text-justify">
          <h1 className="font-bold text-xl"> {item.title}</h1>
          <p>{item.description}</p>
          <Link
            to={`/product/${item.foodCategory.category}`}
            className="font-bold text-action hover:text-tertiary pt-2"
          >
            Discover More...
          </Link>
        </div>
      </Tilt>
    </motion.li>
  );
};

export default Card;
