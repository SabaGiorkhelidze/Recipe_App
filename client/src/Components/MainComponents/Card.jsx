import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { GoBookmark } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Card = ({ header, image, id }) => {
  const navigate = useNavigate();
  const handleCardNavigate = () => {
    navigate(`/home/${id}`);
  };
  const truncateHeaderIfNeeded = (header) => {
    if (header.length > 25) {
      return header.substring(0, 21) + " ...";
    }
    return header; 
  };

  const truncatedHeader = truncateHeaderIfNeeded(header);

  return (
    <>
      <motion.div
        className="border-4 border-rose-300 bg-rose-100 rounded-lg w-64 h-64  flex flex-col items-start justify-end my-2 opacity-90 hover:opacity-100 cursor-pointer"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
        }}
        style={{
          backgroundImage: `url('${image}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 250,
          backgroundPosition: "center"
        }}
        onClick={handleCardNavigate}
      >
        <div className="text-start mb-2 px-2">
          <h1 className="text-lg font-black">{truncatedHeader}</h1>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
