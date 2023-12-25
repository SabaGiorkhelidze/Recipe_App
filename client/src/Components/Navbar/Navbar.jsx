import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MainContext } from "../../Context/MainContext";

const Navbar = () => {
  const [changeHeader, setChangeHeader] = useState(false);
  const { userContext } = useContext(MainContext);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setChangeHeader(true);
      } else {
        setChangeHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        changeHeader
          ? "bg-rose-200 fixed z-50 top-0 left-0 w-full shadow-md transition duration-500"
          : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500 "
      }
    >
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3 text-gray-700 poppins font-semibold">
        {/* left  */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="mx-8 my-1 cursor-pointer"
        >
          RecipeApp
        </motion.div>
        <div className="flex flex-grow"></div>
        {/* right  */}
        <Link to={"/"}>
          <motion.div whileHover={{ scale: 1.1 }} className="mx-4 my-1 ">
            Add Post
          </motion.div>
        </Link>
        <Link to={"/accountSettings"}>
          <motion.div whileHover={{ scale: 1.1 }} className="mx-6 my-1">
            Account
          </motion.div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
