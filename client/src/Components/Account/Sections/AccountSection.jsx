import React from "react";
import CustomInput from "../CustomComponents/CustomInput";

const AccountSection = () => {
  const testData = [
    { label: "username", placeholder: "Username" },
    { label: "email", placeholder: "email" },
    { label: "Password", placeholder: "Password" },
    { label: "Confirm Password", placeholder: "Confirm Password" },
  ];
  return (
    <div className="w-[100%] flex flex-col justify-start border-2 border-purple-800 py-10 h-full">
      <div className="my-3 mx-3">
        <h1 className="text-xl">General Info</h1>    
      </div>
      <div className="grid grid-cols-2 gap-6 justify-center mt-6">
        
        {Array.from({ length: testData.length }).map((_, index) => (
          <CustomInput
            key={index}
            label={testData[index].label} // Check that data[index] is a valid object
            placeholder={testData[index].placeholder} // Check that data[index] is a valid object
          />
        ))}
      </div>

      <div className="flex justify-end px-10 mx-36 my-10 ">
        <input type="submit" value="Change Info" className="bg-rose-400 cursor-pointer px-2 py-2 rounded-lg text-white" />
      </div>
    </div>
  );
};

export default AccountSection;
