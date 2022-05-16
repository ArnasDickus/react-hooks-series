/* eslint-disable react/no-unescaped-entities */
import Layout from '@components/layout/layout'
import { IHeadSeo } from '@shared/interfaces'
import React, { useReducer, useState } from 'react'
import styled from 'styled-components';


  type State = {
    value: number;
  }
  
  const initialCounterState: State = {
    value: 0
  }
  
  type Action = {
    type: 'INCREASE' | 'DECREASE' | 'RESET',
    payload: number
  }
  
const UseReducerPage = () => {
  const headSeoData: IHeadSeo = {
    title: "Use State Page",
    content: "Use State hooks",
    description: "Training for useState hook"
  }

  const counterReducer = (state: State, action: Action): State => {
    const {type, payload} = action;
    switch (type) {
      case 'INCREASE':
      return {
          ...state, 
          value: state.value + payload
        }
      case 'DECREASE':
        return {
          ...state, 
          value: state.value - payload
        }
      case 'RESET': 
        return initialCounterState
      default:
        return state;
    }
  }

  const [
    state, 
    dispatch
  ] = useReducer(counterReducer, initialCounterState);

  const [_ignored, forceUpdate] = useReducer(x => x + 1, 0);
  
  return (
    <Layout headSeoData={headSeoData}>
      <ContainerUseReducerPage>
          <div className="wrapper">
          Count: {state.value}
          <button onClick={() => dispatch({
              type: 'DECREASE',
              payload: 1
          })}>
            -
          </button>
          <button onClick={() => dispatch({
             type: 'INCREASE',
             payload: 1
          })}>
            +
          </button>
          <button onClick={() => dispatch({
             type: 'RESET',
             payload: 1
          })}>
            Reset
          </button>
          {/* <h1>{count}</h1>
          <button onClick={() => {
              // setCount(count + 1);
              // setShowText(!showText);
          }}>Increment</button> */}
          </div>
          <button onClick={() =>  forceUpdate()}>Force Update not recommendted</button>
       
     
      {/* {showText ? <p className="text">This is a text</p> : null} */}
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