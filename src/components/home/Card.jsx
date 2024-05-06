/* eslint-disable react/prop-types */
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { motion, useAnimate } from "framer-motion";
const Card = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped((prevState) => !prevState);
      setIsAnimating(true);
    }
  };
  return (
    <motion.div
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 360 }}
      transition={{ duration: 0.6, animationDirecion: "normal" }}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      <Tilt
        id={item.title}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        className={`
        } pb-4 bg-gradient-to-t from-tertiary to-primary tertiary w-[300px] h-[400px] drop-shadow-md rounded-xl`}
        //   options={defaultOptions}
      >
        {!isFlipped && (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="object-cover bg-cover w-full h-3/4 rounded-2xl"
          />
        )}
        <div className={`${isFlipped && "scale-x-[-1] h-full"}`}>
          <h2 className="text-center font-bold py-4">{item.title}</h2>
          <div
            className={`w-full h-full flex flex-col ${
              isFlipped ? " justify-end pb-20 px-4" : ""
            }`}
          >
            {isFlipped && <p className="text-sm">{item.description}</p>}
            <div className={`${isFlipped ? 'pt-20 lex gap-4' : 'flex flex-col items-center'}`}>
              <Link to={"product"} className="hover:text-primary">
                Discover More
              </Link>
              <button
                to={"product"}
                className="hover:text-primary"
                onClick={handleFlip}
              >
                {!isFlipped ? "Read More" : "Back"}
              </button>
            </div>
          </div>
        </div>
      </Tilt>

      {/* <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        className={`${
          !isFlipped ? "hidden" : ""
        }  pb-4 bg-gradient-to-t from-tertiary to-primary tertiary w-[300px] h-[400px] drop-shadow-md rounded-xl`}
        //   options={defaultOptions}
      >
        <h2 className="scale-x-[-1] text-center font-bold py-4">
          {item.title}
        </h2>
        <div className="scale-x-[-1]  flex justify-center flex-col items-center">
          <Link to={"product"} className="hover:text-primary">
            Discover
          </Link>
          <button
            to={"product"}
            className="hover:text-primary"
            onClick={handleFlip}
          >
            Read More
          </button>
        </div>
      </Tilt>*/}
    </motion.div>
  );
};

export default Card;
