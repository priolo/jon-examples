import { useStore } from "@priolo/jon";
import React from "react";

export default function App() {

  const { state, fetchBook } = useStore("myStore")

  return (<div>
      <h1>{state?.book?.name}</h1>
      <h2>{state?.book?.authors[0]}</h2>
      <button onClick={(e)=>fetchBook()}>Featch data</button>
  </div>);
}
