/* eslint-disable react/no-unescaped-entities */
import Layout from '@components/layout/layout'
import { IHeadSeo } from '@shared/interfaces'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

interface IincrementData {
  increment: number;
  history: number[];
}

const UseStatePage = () => {
  const headSeoData: IHeadSeo = {
    title: "Use State Page",
    content: "Use State hooks",
    description: "Training for useState hook"
  }
    const [increment, setIncrement] = useState(0);
    const [incrementationHistory, setIncrementationHistory] = useState<number[]>([]);
    const [incrementData, setIncrementData] = useState<IincrementData>({
      increment: 0,
      history: []
    })
    let incrementNumber = 0
    console.log('incrementData', incrementData);

  return (
    <Layout headSeoData={headSeoData}>
      <ContainerUseStatePage>
        <button onClick={ () => {
          // setIncrement(increment + 1);
          // setIncrementationHistory(prevState => [...prevState, increment + 1 ])
          // setIncrementData((prevState) => { ...prevState, increment: increment + 1, history: increment + 1})
          setIncrementData(prevState => ({
            ...prevState,
            increment: incrementData?.increment + 1,
            history:  [...prevState?.history, increment + 1]
         }));
           incrementNumber += 1;
          console.log('incrementNumber', incrementNumber);
        }}>Increment</button>
        <button onClick={() => {
           setIncrement(increment - 1);
           setIncrementationHistory(prevState => [...prevState, increment - 1 ])
            incrementNumber -= 1;
            console.log('incrementNumber', incrementNumber);
        }}>Decrement</button>
        <p>{incrementData?.increment}</p>
      </ContainerUseStatePage>
    </Layout>
  )
}

// export const hookFunction = () => {
//   const [increment, setIncrement] = useState(0);
// }

export default UseStatePage;

const ContainerUseStatePage = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;