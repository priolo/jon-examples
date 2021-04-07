import React from "react"
import ReactDOM from "react-dom"
import Main from "./components/Main"

import { MultiStoreProvider, setupStore } from '@priolo/jon';
import layout from "./stores/layout"
import user from "./stores/user"
setupStore({ layout, user })


// APPLICATION
const rootElement = document.getElementById("app");
ReactDOM.render(
  <MultiStoreProvider>
    <Main />
  </MultiStoreProvider>,
  rootElement
);
