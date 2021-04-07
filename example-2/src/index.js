import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { MultiStoreProvider, setupStore } from '@priolo/jon';
import store1 from "./stores/store1"
import store2 from "./stores/store2"
setupStore({ store1, store2 })

const rootElement = document.getElementById("root");
ReactDOM.render(
  <MultiStoreProvider>
    <App />
  </MultiStoreProvider>,
  rootElement
);
