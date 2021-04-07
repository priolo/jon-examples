import { useStore } from "@priolo/jon";
import React from "react";

export default function App() {

  const { state, setValue, getUppercase } = useStore("myStore")

  return (<div>
      <h1>{state.value}</h1><h2>{getUppercase()}</h2>
      <input onChange={(e)=>setValue(e.target.value)} />
  </div>);
}
