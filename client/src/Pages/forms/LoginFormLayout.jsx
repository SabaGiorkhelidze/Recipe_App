import FormSection from "../../Components/Form Components/LoginForm/FormSection";
import LoginFormLogo from "../../Components/Form Components/LoginForm/LoginFormLogo";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    axios
      .post("/api/login", loginData)
      .then((response) => {
        setMessage(response.data.message);
        navigate("/home");
      })
      .catch((error) => {
        setError(error.response.data.message);
        setTimeout(() => {
          setError("");
        }, 7000);
      });
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <LoginFormLogo />
      <FormSection
        handleLoginSubmit={handleLoginSubmit}
        loginData={loginData}
        setLoginData={setLoginData}
      />
    </section>
  );
};

export default LoginForm