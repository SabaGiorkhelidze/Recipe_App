import React from "react";
import { useContext } from "react";
import { ReadMoreContext } from "../../Context/ReadMoreContext";
import ImageHeader from "./ImageHeader";
import StatsBox from "./StatsBox";

const Layout = () => {
  const { memodPost } = useContext(ReadMoreContext);
  return (
    <div className="md:mx-16 ">
      <div className="w-[100%] ">
        <div className="w-full  flex justify-center my-4">
          <h3 className="text-3xl text-gray-700 poppins font-semibold ">
            {memodPost.title}
          </h3>
        </div>

        {/* <Description /> */}

        <StatsBox
          calories={memodPost.calories}
          totalTime={memodPost.totalTime}
          ingredientCount={memodPost.ingredients.length}
        />

        <div className="flex flex-row items-center w-full justify-center my-8">
          <div>
            <ImageHeader image={memodPost.post_image} />
          </div>
          <div>
            <ol className=" list-decimal">
              {memodPost.ingredients.map((item, index) => (
                <li key={index} className="my-4 font-bold">
                  <span className=" font-normal">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <h3 className="text-xl text-gray-700 poppins font-semibold">Posted: {memodPost.date_posted}</h3>
        </div>
      </div>
    </div>
  );
};

export default Layout;
