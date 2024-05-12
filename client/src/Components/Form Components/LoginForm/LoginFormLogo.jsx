import logo from "../../../Assets/logo3.jpg";

const LoginFormLogo = () => {
  return (
    <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img src={logo} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

export default LoginFormLogo