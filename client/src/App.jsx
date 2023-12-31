import LoginForm from "./Components/forms/LoginForm";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./Components/forms/RegisterForm";
import Main from "./Components/Main";
import ReadMore from "./Components/MainComponents/ReadMore";
import { MainContext } from "./Context/MainContext";
import { CardContext } from "./Context/CardContext";
import Account from "./Components/Account/Account";
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
          <Route path="/accountSettings" element={<Account />}></Route>
        </Routes>
      </MainContext.Provider>
    </div>
  );
}

export default App;
