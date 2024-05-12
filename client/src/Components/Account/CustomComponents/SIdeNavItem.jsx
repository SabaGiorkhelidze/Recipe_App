import React from "react";

const SideNavItem = ({ title, icon, isActive, onClick }) => {
  return (
    <div
      className={`flex items-center cursor-pointer ${
        isActive ? "text-blue-500" : "text-black"
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{title}</span>
    </div>
  );
};

export default SideNavItem;
