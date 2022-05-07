import React from "react";
import Main from "./components/main";
import type {TestInterface} from "./types/typesInterface"


type Props = {}

function App({}: Props) {

  const test: TestInterface = {
    test: "typescript working",
    error: "Error!" 
  }

  return (
    <div>
      <Main test={test}/>
    </div>
  )
}

export default App