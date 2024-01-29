import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";
import Navbar from "../Navbar/Navbar";
import AccountSidebar from "./AccountSidebar";
import AccountSection from "./Sections/AccountSection";
const Account = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    // password: "", // You may want to set a default value for password
    // confirmPassword: "",
  });
  const [updateInfo, setUpdateInfo] = useState({
    username: "",
    email: "",
    // password: "", // You may want to set a default value for password
    // confirmPassword: "",
  });
  const navigate = useNavigate();
  const { AccountContext } = useContext(MainContext);
  useEffect(() => {
    axios
      .get("/api/accountSettings")
      .then((response) => {
        setUser(response.data.user);
        console.log(user);
        // Initialize updateInfo state with user data
        // if (response.data.user) {
        //   setUpdateInfo({
        //     username: response.data.user.username,
        //     email: response.data.user.email,
        //     // password: "",
        //     // confirmPassword: "",
        //   });
        // }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.location.href = "/home";
        } else {
          console.log("error occurred: ", error);
        }
      });
  }, []);

  const saveChangesHandler = () => {
    axios
      .post("/api/saveAccountChanges", updateInfo)
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error("Error occurred while saving changes:", error);
      });
  };
  const testData = [
    { label: "username", placeholder: "Username" },
    { label: "email", placeholder: "email" },
  ];
  return (
    <>
      <AccountContext.Provider>
        <div className="">
          {" "}
          <Navbar></Navbar>
        </div>
        <div className="w-full flex mt-16  items-center px-20 flex-row border-2 border-red-500 h-full">
          {/* sidebar */}
          <div>
            <AccountSidebar />
          </div>

          {/* sections */}
          <div className="w-full px-10">
            <AccountSection numberOfInput={testData.length} data={testData} />
          </div>
        </div>

        {/* <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between px-4 md:px-10 py-3 h-full">
          // {/* change acc *}
          <div className="flex flex-col md:w-1/2 items-center my-5 ">
            <div>
              <h1>Change Account</h1>
            </div>
            <div className="flex flex-col md:w-full gap-6">
              <div className="flex flex-col md:flex-row justify-evenly py-3">
                <div className="flex flex-col ">
                  <label htmlFor="input">Username</label>
                  <input
                    value={updateInfo.username}
                    type="text"
                    onChange={(e) =>
                      setUpdateInfo({ ...updateInfo, username: e.target.value })
                    }
                    className="w-full md:w-64 px-4 py-2 rounded-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="flex flex-col ">
                  <label htmlFor="input">Email</label>
                  <input
                    value={updateInfo.email}
                    onChange={(e) =>
                      setUpdateInfo({ ...updateInfo, email: e.target.value })
                    }
                    type="text"
                    className="w-full md:w-64 px-4 py-2 rounded-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-evenly md:px-16 py-3">
                <div className="flex flex-col">
                  <label htmlFor="input">Password</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="input">Confirm Password</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="md:flex md:justify-center md:items-center">
                <button
                  className="w-full md:w-80 block bg-rose-500 hover:bg-rose-400 focus:bg-rose-400 text-white 
                font-semibold rounded-full px-4 py-3 mt-6"
                  onClick={saveChangesHandler}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/2 items-center my-5 md:my-10 ">
            <div className="">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="my-1">
                  <img
                    src=""
                    alt=""
                    className="border-2 border-black w-32 h-32 rounded-full"
                  />
                </div>

                <div className="text-xl">
                  <h1 className="text-center md:self-center">
                    username: {user.username}
                  </h1>
                  <p className="text-center text-gray-500 mt-1 md:text-start">
                    id: {user && user.id}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <h1 className="text-center md:text-start">
                  last update: {user && user.password}
                </h1>
              </div>

              <div className="mt-4">
                <h1 className="text-center md:text-start">total Posts: 12</h1>
              </div>
            </div>
          </div>
        </div> */}
      </AccountContext.Provider>
    </>
  );
};

export default Account;
