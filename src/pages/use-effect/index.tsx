
import Layout from '@components/layout/layout'
import { IHeadSeo } from '@shared/interfaces'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';

const useEffectPage = () => {
  const headSeoData: IHeadSeo = {
    title: "Use State Page",
    content: "Use State hooks",
    description: "Training for useState hook"
  }

  const [state, setState] = useState(0);
  const [data, setData] = useState("");

  const getData = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      setData(response?.data?.[0]?.email);
      console.log('response', response?.data);
    })
  }

  useEffect(() => {
      console.log('Call me once');
      getData();
  }, []);

  useEffect(() => {
    console.log('Call me on every rerender');
  })

  return (
    <Layout headSeoData={headSeoData}>
      <ContainerUseEffectPage>
        <div className="wrapper">
        <button onClick={() => {
          setState(state + 1);
        }}>Increase number</button>
        </div>
        {state}
        {data}
      </ContainerUseEffectPage>
    </Layout>
  )
}

export default useEffectPage;

const ContainerUseEffectPage = styled.div`
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