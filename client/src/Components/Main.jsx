import React, { useEffect, useState, useMemo, useContext } from "react";
import { motion, useAnimation } from "framer-motion"; // Import motion and useAnimation
import Banner from "./MainComponents/Banner";
import Navbar from "./Navbar/Navbar";
import CardLayout from "./MainComponents/CardLayout";
import axios from "axios";
import { MainContext } from "../Context/MainContext";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [isSearchParam, setIsSearchParam] = useState(false)
  const [searchResults, setSearchResults] = useState(null)
  const controls = useAnimation();

  const { CardContext, ReadMoreContext } = useContext(MainContext);

  useEffect(() => {
    axios
      .get("api/home")
      .then((response) => {
        setPosts(response.data);

        controls.start({ opacity: 1 });
      })
      .catch((error) => console.log("error occured: ", error));
  }, [controls]);

  // console.log(posts[0]);

  const memoizedPosts = useMemo(() => {
    return posts;
  }, [posts]);

  return (
    <>
      <CardContext.Provider value={{ posts: memoizedPosts, isSearchParam, setIsSearchParam,searchResults, setSearchResults,  }}>
        <Navbar />
        <motion.div initial={{ opacity: 0 }} animate={controls}>
          <Banner />
          <CardLayout />
        </motion.div>
      </CardContext.Provider>
    </>
  );
};

export default Main;
