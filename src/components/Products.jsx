/* eslint-disable react/no-unescaped-entities */
import { useCallback, useEffect, useState } from "react";
import { products } from "../utils/productList";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import SearchBar from "./Filter/SearchBar";

const Products = () => {
  const { category } = useParams();
  console.log(category)
  const [filter, setFilter] = useState(category || "");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(products);

  const filterProducts = useCallback(() => {
    let prod;
    if (filter === "" || filter[0] === "all" || filter.length === 0) {
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
    console.log(filter)
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
            check={category}
            onSubmit={submitFilter}
            search={search}
            handleChangeSearch={setSearch}
          />
        </div>

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
      <Footer />
    </>
  );
};

export default Products;
