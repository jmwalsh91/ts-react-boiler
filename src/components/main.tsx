import React from 'react'
import { TestInterface } from '../types/typesInterface'

type Props = {
  test: TestInterface
}

function Main({test}: Props) {
  
  return (
    <div>
        <p style={{color: "black"}}>
          {test.test} </p></div>
  )
}

export default Main