import LoginForm from "./Components/forms/LoginForm";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./Components/forms/RegisterForm";
import Main from "./Components/Main";
import ReadMore from "./Components/MainComponents/ReadMore";
import { MainContext } from "./Context/MainContext";
import { CardContext } from "./Context/CardContext";
import AccountPage from "./Components/Account/AccountPage";
import { ReadMoreContext } from "./Context/ReadMoreContext";
import { AccountContext } from "./Context/AccountContext";
function App() {
  return (
    <div className="App">
      <MainContext.Provider
        value={{
          ReadMoreContext: ReadMoreContext,
          CardContext: CardContext,
          AccountContext: AccountContext,
        }}
      >
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/home" element={<Main />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/home/:id" element={<ReadMore />}></Route>
          <Route path="/accountSettings" element={<AccountPage />}></Route>
        </Routes>
      </MainContext.Provider>
    </div>
  );
}

export default App;
