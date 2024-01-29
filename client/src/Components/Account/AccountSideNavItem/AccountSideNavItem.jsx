import React from "react";

const AccountSideNavItem = ({icon, title}) => {
  return (
    <div className="border-2 border-blue-700 ">
      <div className="flex flex-row gap-4 px-5 items-center ">
        {icon}
        <h1 className="text-xl">{title}</h1>
      </div>
    </div>
  );
};

export default AccountSideNavItem;
