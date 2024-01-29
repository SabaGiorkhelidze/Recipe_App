import React from "react";
import { AiOutlineUser, AiOutlineLock, AiOutlineAreaChart } from "react-icons/ai";
import AccountSideNavItem from "./AccountSideNavItem/AccountSideNavItem";
const AccountSidebar = () => {
  return (
    <div className="h-full border-2 border-black px-10 flex flex-col gap-5 py-4">
      <AccountSideNavItem
        title={"Account"}
        icon={<AiOutlineUser className="w-7 h-7" />}
      />
      <AccountSideNavItem
        title={"Password"}
        icon={<AiOutlineLock className="w-7 h-7" />}
      />
      <AccountSideNavItem
        title={"Statistics"}
        icon={<AiOutlineAreaChart className="w-7 h-7" />}
      />
      <div>other</div>
    </div>
  );
};

export default AccountSidebar;
