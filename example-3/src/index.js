import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { MultiStoreProvider, setupStore } from '@priolo/jon';
import myStore from "./myStore"
setupStore({ myStore })

const rootElement = document.getElementById("root");
ReactDOM.render(
  <MultiStoreProvider>
    <App />
  </MultiStoreProvider>,
  rootElement
);
