
import { MainContext } from "./Context/MainContext";
import { CardContext } from "./Context/CardContext";
import { ReadMoreContext } from "./Context/ReadMoreContext";
import { AccountContext } from "./Context/AccountContext";
import Router from "./Routes/Router";
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
        <Router />
      </MainContext.Provider>
    </div>
  );
}

export default App;
