import React, { memo, useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Layout from "../ReadMore/Layout";
import { MainContext } from "../../Context/MainContext";
import Loading from "../Loading/Loading";

const ReadMore = () => {
  const { id } = useParams();
  const { CardContext, ReadMoreContext } = useContext(MainContext);
  const [postInfo, setPostInfo] = useState();

  useEffect(() => {
    axios
      .get(`/api/home/${id}`)
      .then((response) => {
        setPostInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log(postInfo);

  const memodPost = useMemo(() => postInfo, [postInfo]);

  return (
    <ReadMoreContext.Provider value={{ memodPost: memodPost }}>
      <div>
        <div className="">
          {postInfo ? (
            <Layout />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </ReadMoreContext.Provider>
  );
};

export default ReadMore;
