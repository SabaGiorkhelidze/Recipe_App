import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const [clientError, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    // last_update: new Date(),
  });
  const [response, setResponse] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("/api/register", formData)
      .then((response) => {
        setResponse(response.data.message);
        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data.message);
        setTimeout(() => {
          setError("");
        }, 7000);
      });
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col bg-gray-200">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="username"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            value={formData.username}
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm password"
            value={formData.confirm_password}
            onChange={(e) =>
              setFormData({ ...formData, confirm_password: e.target.value })
            }
          />

          <button
            onClick={handleSubmit}
            type="button"
            className="w-full bg-green-500 text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          {clientError ? (
            <div className="text-red-600 text-medium text-center">
              {clientError}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account? {"    "}
          <Link to={"/login"}>
            <a
              className="no-underline border-b border-blue text-blue-600"
              href="#"
            >
              Log in
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
