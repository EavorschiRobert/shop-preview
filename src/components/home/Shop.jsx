/* eslint-disable react/no-unescaped-entities */
import { appwriteConfig } from "../../appwrite/appwriteConfig";
import Card from "./Card";
import { useFetch } from "../../hook/useFetch";
import { CircularProgress } from "@mui/material";

const Shop = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch(appwriteConfig.foodHome);

  return (
    <div className="pt-2 bg-primary pb-10">
      <div className="w-full flex flex-col items-center">
        {!error ? (
          <>
            <h1 className="text-xl font-bold pt-4">
              Some of our's products category
            </h1>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <ul className="flex flex-wrap h-full gap-8 pt-4 justify-center items-center">
                {products.map((item, index) => (
                  <Card item={item} index={index} key={index} />
                ))}
              </ul>
            )}
          </>
        ) : (
          <div>
            <h1>Oops...</h1>
            <h3>Something went wrong</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
