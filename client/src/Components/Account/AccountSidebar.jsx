import React, { useState } from "react";
import { AiOutlineUser, AiOutlineLock, AiOutlineAreaChart } from "react-icons/ai";
import SideNavItem from "./CustomComponents/SIdeNavItem";

const items = [
  { title: "Account", icon: <AiOutlineUser className="w-7 h-7" /> },
  { title: "Password", icon: <AiOutlineLock className="w-7 h-7" /> },
  { title: "Statistics", icon: <AiOutlineAreaChart className="w-7 h-7" /> }
];

const AccountSidebar = () => {
  const [activeItem, setActiveItem] = useState("Account");

  const handleItemClick = (title) => {
    setActiveItem(title);
  };

  return (
    <div className="h-[100%] border-2 border-black px-10 flex flex-col gap-7 py-8">
      <divc className='w-full flex justify-center items-center py-1'>
        <h1 className="font-bold text-xl">Sections</h1>
      </divc>
      {items.map((item, index) => (
        <SideNavItem
          key={index}
          title={item.title}
          icon={item.icon}
          isActive={activeItem === item.title}
          onClick={() => handleItemClick(item.title)}
        />
      ))}
    </div>
  );
};

export default AccountSidebar;
