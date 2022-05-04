/* eslint-disable react/no-unescaped-entities */
import Layout from '@components/layout/layout'
import { IHeadSeo } from '@shared/interfaces'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const UseStatePage = () => {
  console.log('hello start');
  const headSeoData: IHeadSeo = {
    title: "Use State Page",
    content: "Use State hooks",
    description: "Training for useState hook"
  }
  const [increment, setIncrement] = useState(0);

  return (
    <Layout headSeoData={headSeoData}>
      <ContainerUseStatePage>
        <button onClick={() => {
          setIncrement(increment + 1);
          console.log('increment', increment);
        }}>Increment</button>
        <button onClick={() => setIncrement(increment - 1)}>Decrement</button>
        <p>{increment}</p>
      </ContainerUseStatePage>
    </Layout>
  )
}

export default UseStatePage;

const ContainerUseStatePage = styled.div`

`;