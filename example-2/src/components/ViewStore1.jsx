import { useStore } from "@priolo/jon";
import React from "react";

export default function Command() {

  const { state, setValue } = useStore("store1")

  return (<div>store 1
    <div>{state.value}</div>
    <input onChange={(e)=>setValue(e.target.value)} />
    <hr />
  </div>)
}
