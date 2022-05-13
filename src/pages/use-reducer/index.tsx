/* eslint-disable react/no-unescaped-entities */
import Layout from '@components/layout/layout'
import { IHeadSeo } from '@shared/interfaces'
import React, { useReducer, useState } from 'react'
import styled from 'styled-components';

interface IincrementData {
  increment: number;
  history: number[];
}

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT": 
        return {count: state.count =+ 1, ...state}
        
    }
}

const UseReducerPage = () => {
  const headSeoData: IHeadSeo = {
    title: "Use State Page",
    content: "Use State hooks",
    description: "Training for useState hook"
  }

  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: false});
  return (
    <Layout headSeoData={headSeoData}>
      <ContainerUseReducerPage>
          <div className="wrapper">
          <h1>{count}</h1>
          <button onClick={() => {
              setCount(count + 1);
              setShowText(!showText);
          }}>Increment</button>
            </div>
       
     
      {showText ? <p className="text">This is a text</p> : null}
      </ContainerUseReducerPage>
    </Layout>
  )
}

// export const hookFunction = () => {
//   const [increment, setIncrement] = useState(0);
// }

export default UseReducerPage;

const ContainerUseReducerPage = styled.div`
  margin-top: 200px;
 

  .wrapper {
    display: flex;
  justify-content: center;
  column-gap: 20px;
  }
  .text {
      text-align: center;
  }
`;