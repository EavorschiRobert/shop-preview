import { motion } from "framer-motion";
import ProductsSlogan from "./ProductsSlogan";
import Shop from "./Shop";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <div className="w-full h-3/4 flex gap-4 px-4 pt-20">
        <div className=" h-full flex-1 text-xs sm:text-sm flex flex-col justify-center items-center xl:justify-start xl:pt-20 gap-4">
          <div className="bg-home-png absolute w-full h-full bg-cover -left-20 opacity-30 "></div>
          <h2 className="font-bold text-3xl text-center text-tertiary ">
            Welcome
          </h2>
          <div className="w-full flex flex-col items-center gap-1">
            <p className="w-3/4">
              Explore 'Village Fare': your coulinary sanctuary in a charming
              Greek's hamlet!
            </p>
            <p className="w-3/4">
              Indulge in artisanal delights and savor distinctive flavors.
              Welcome to an unparalieled gastronomic adventure!
            </p>
            <div className="bg-food w-1/2 object-cover bg-cover -rotate-90 z-0"></div>
            
          </div>
        </div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-7/8 flex-1 bg-home bg-cover object-cover bg-top rounded-tl-[20%] rounded-br-[20%] xl:bg-center relative z-20"
        ></motion.div>
      </div>

      <div className="h-full mt-[-10%] bg-food bg-cover object-cover bg-no-repeat bg-right relative z-10">
        <ProductsSlogan />
        <Shop />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
