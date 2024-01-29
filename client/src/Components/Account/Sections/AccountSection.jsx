import React from "react";
import CustomInput from "../CustomComponents/CustomInput";

const AccountSection = ({ title, numberOfInput, data }) => {
  return (
    <div className="w-[100%] flex flex-col justify-start h-auto border-2 border-purple-800 py-10">
      <div className="my-3 mx-3">
        <h1 className="text-xl">General Info</h1>    
      </div>
      <div className="grid grid-cols-2 gap-6 justify-center mt-6">
        
        {Array.from({ length: numberOfInput }).map((_, index) => (
          <CustomInput
            key={index}
            label={data[index].label} // Check that data[index] is a valid object
            placeholder={data[index].placeholder} // Check that data[index] is a valid object
          />
        ))}
      </div>
    </div>
  );
};

export default AccountSection;
