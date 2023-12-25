import React from "react";
import calorieIcon from "../../Assets/calorieIcon.png";
import clockIcon from "../../Assets/clockIcon.png";
import IngredientIcon from "../../Assets/IngredientIcon.png";

const StatsBox = ({ calories, totalTime, ingredientCount }) => {
  return (
    <div className="md:h-[200px] bg-orange-100 py-5 mx-8 md:mx-16 rounded-xl">
      <div className="flex justify-center md:justify-start px-20">
        <h3 className="self-center">Description</h3>
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className=" w-full flex justify-center flex-col md:flex-row py-5">
          <img
            src={calorieIcon}
            alt=""
            className="w-12 h-12 self-center ml-2"
          />
          <h3 className="self-center py-2 flex md:flex-col md:mx-3">
            Calories:<span>{Math.round(calories)}</span>
          </h3>
        </div>

        <div className=" w-full flex justify-center flex-col md:flex-row py-5">
          <img src={clockIcon} alt="" className="w-12 h-12 self-center" />
          <h3 className="self-center py-2 flex md:flex-col md:mx-3">
            Time: <span>{totalTime}</span>
          </h3>
        </div>

        <div className=" w-full flex justify-center flex-col md:flex-row py-5">
          <img src={IngredientIcon} alt="" className="w-12 h-12 self-center" />
          <h3 className="self-center py-2 flex md:flex-col md:mx-3">
            Ingredients: <span>{ingredientCount}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
