import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom"; 
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/createStore";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter> 
        <PersistGate persistor={persistor}> 
        <ChakraProvider>
          <App />
          </ChakraProvider>
        </PersistGate>{" "}
      </HashRouter>{" "}
    </Provider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
