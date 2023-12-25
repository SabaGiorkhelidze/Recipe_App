import React from "react";

const ImageHeader = ({ image }) => {
  return (
    <div className="w-[350px] h-[350px] flex items-center mr-10">
      <img src={image} alt="" className=" rounded-lg w-[90%] h-[90%]" />
    </div>
  );
};

export default ImageHeader;
