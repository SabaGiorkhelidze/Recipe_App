import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "../Layouts/forms/RegisterForm";
import Main from "../Layouts/Main/Main";
import ReadMore from "../Components/MainComponents/ReadMore";
import AccountPage from "../Layouts/Account/AccountPage";
import LoginForm from "../Layouts/forms/LoginFormLayout";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/home" element={<Main />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/home/:id" element={<ReadMore />}></Route>
        <Route path="/accountSettings" element={<AccountPage />}></Route>
      </Routes>
    </>
  );
};

export default Router;
