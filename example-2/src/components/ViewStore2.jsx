import { useStore } from "@priolo/jon";
import React from "react";

export default function Command() {

  const { state, setValue } = useStore("store2")

  return (<div>store 2
    <div>{state.value}</div>
    <input onChange={(e)=>setValue(e.target.value)} />
    <hr />
  </div>)
}
