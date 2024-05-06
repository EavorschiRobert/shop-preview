import { useRef } from "react";
import { productsCategory } from "../../utils/products";
import { useInView } from "framer-motion";
import Card from "./Card";

const Shop = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div className="pt-2 bg-primary pb-10">
      <div
        className="w-full flex flex-col items-center"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        ref={ref}
      >
        <h1 className="text-xl font-bold pt-4">Some of our's products category</h1>
        <div className="flex flex-wrap h-full gap-8 pt-4 justify-center items-center">
          {productsCategory.map((item, index) => (
            <div key={index} className="pb-20">
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
