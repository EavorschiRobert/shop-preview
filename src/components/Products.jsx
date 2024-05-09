/* eslint-disable react/no-unescaped-entities */
import { useCallback, useEffect, useState } from "react";
import { products } from "../utils/productList";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import SearchBar from "./Filter/SearchBar";

const Products = () => {
  const { category } = useParams();
  const [filter, setFilter] = useState(category || "");
  const [search, setSearch] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(products);

  const filterProducts = useCallback(() => {
    let prod;
    if (filter === "" || filter === "all" || filter.length === 0) {
      prod = products;
    } else {
      prod = products.filter((item) => filter.includes(item.category));
    }
    if (search) {
      prod = prod.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setData(prod);
  }, [filter, search]);

  const submitFilter = (filter) => {
    setFilter(filter || "");
    filterProducts();
  };

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);
  return (
    <>
    <div className="bg-primary pt-20 px-4 w-full">
      <div className="w-full flex justify-end py-2 h-1/2 items-center">
        <SearchBar
          check={filter}
          onSubmit={submitFilter}
          search={search}
          handleChangeSearch={setSearch}
        />
      </div>

      {/* {isLoading && (
        <div className="w-screen flex justify-center py-20">
          <CircularProgress />
        </div>
      )} */}
      {data && data.length === 0 && filter !== "" ? (
        <div>
          <h1 className="text-2xl font-bold">Sorry</h1>
          <p>
            We currently don't have that kind of product. Try to contact us!
          </p>
        </div>
      ) : (
        <div className="w-full h-full flex flex-wrap gap-4 justify-center pb-4">
          {data.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
    
  );
};

export default Products;
