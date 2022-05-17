
import Layout from '@components/layout/layout'
import Child from '@components/layout/use-callback/child/child';
import { IHeadSeo } from '@shared/interfaces'
import axios from 'axios';
import React, { useReducer, useState, useEffect, useMemo, useCallback } from 'react'
import styled from 'styled-components';

const UseCallBackPage = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState('Yo pls sub to the channel');
    const headSeoData: IHeadSeo = {
        title: "Use State Page",
        content: "Use State hooks",
        description: "Training for useState hook"
    }

    const returnComment = useCallback((name: string) => {
        return data + name;
    }, [data])

  return (
    <Layout headSeoData={headSeoData}>
      <ContainerUseCallBackPage>
          <div className="wrapper">
              <Child returnComment={returnComment} />
              <button onClick={() => {
                  setToggle(!toggle);
              }}>Click me</button>
            </div>
            {toggle ? <p>Toggle</p> : null}
      </ContainerUseCallBackPage>
    </Layout>
  )
}

export default UseCallBackPage;

const ContainerUseCallBackPage = styled.div`
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