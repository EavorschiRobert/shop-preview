/* eslint-disable react/no-unescaped-entities */

import { productsCategory } from "../../utils/products";
import Card from "./Card";

const Shop = () => {
  return (
    <div className="pt-2 bg-primary pb-10">
      <div
        className="w-full flex flex-col items-center"
      >
        <h1 className="text-xl font-bold pt-4">
          Some of our's products category
        </h1>
        <ul className="flex flex-wrap h-full gap-8 pt-4 justify-center items-center">
          {productsCategory.map((item, index) => (
            <Card item={item} index={index} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shop;
