import React from "react";
import model from "./models/model";
import { StoreProvider, createStore } from "easy-peasy";
import Routing from "./components/Routing";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/style.css";

const store = createStore(model);

const App = () => {
   return (
      <BrowserRouter>
         <StoreProvider store={store}>
            <Routing />
         </StoreProvider>
      </BrowserRouter>
   );
};

export default App;
