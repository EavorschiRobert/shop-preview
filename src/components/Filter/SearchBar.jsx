/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@mui/material";
import { faCaretDown } from "../../utils/icons";
import { useState } from "react";
import { motion } from "framer-motion";
import { filterCategory } from "../../utils/products";
import CheckBox from "./CheckBox";

const SearchBar = ({ check, onSubmit, search, handleChangeSearch }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelectorAll("input");
    const newFilter = [];
    form.forEach((item) => {
      if (item.checked) {
        newFilter.push(item.name);
      }
    });
    onSubmit(newFilter);
  };
  return (
    <motion.div
      initial={{ height: "50px" }}
      animate={{ height: toggle ? "auto" : "50px" }}
      transition={{ duration: 1.5, type: "tween", bounce: 0 }}
      className="w-full border-2 rounded-xl mt-4 p-2 border-tertiary "
    >
      <div
        className="flex gap-2 items-center cursor-pointer hover:font-bold hover:text-tertiary"
        onClick={handleToggle}
      >
        <h1>Filter Products</h1>
        <motion.div
          animate={{ rotate: toggle ? 90 : 0 }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            bounce: 0.5,
            type: "spring",
          }}
        >
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ color: "#102C57", rotate: "-90deg" }}
          />
        </motion.div>
      </div>

      {toggle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-wrap items-center gap-4"
        >
          <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
            <div className="flex items-center gap-2 flex-wrap">
              <h1>Choose the category</h1>
              {filterCategory.map((item, index) => (
                <CheckBox
                  check={item === check}
                  label={item}
                  key={index}
                  onSubmit={onSubmit}
                />
              ))}
            </div>
            <div className="py-2 flex gap-2">
              <TextField
                id="search"
                label="Search"
                type="search"
                value={search}
                onChange={(e) => handleChangeSearch(e.target.value)}
                variant="standard"
              />
            </div>
            <button className="w-1/2 bg-action text-white p-1 rounded-xl hover:bg-tertiary hover:text-primary">
              Submit Filter
            </button>
          </form>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchBar;
