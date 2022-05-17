
import Layout from '@components/layout/layout'
import { IHeadSeo } from '@shared/interfaces'
import axios from 'axios';
import React, { useReducer, useState, useEffect, useMemo } from 'react'
import styled from 'styled-components';

const UseMemoPage = () => {
    const [data, setData] = useState<any>(null);
    const [toggle, setToggle] = useState(false);
    const headSeoData: IHeadSeo = {
        title: "Use State Page",
        content: "Use State hooks",
        description: "Training for useState hook"
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            setData(response?.data)
        })
    }, [])

    const findLongestName = (comments: any) => {
        if(!comments) {
            return null;
        }
        let longestName = "";
        for(let i = 0; i < comments?.length; i++) {
            let currentName = comments?.[i]?.name;
            if(currentName?.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log('This was computed');
        return longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data]);
  return (
    <Layout headSeoData={headSeoData}>
      <ContainerUseMemoPage>
          <div className="wrapper">
              <div>{getLongestName}</div>
              <button onClick={() => {
                  setToggle(!toggle);
              }}>Click me</button>
            </div>
            {toggle ? <p>Toggle</p> : null}
      </ContainerUseMemoPage>
    </Layout>
  )
}

export default UseMemoPage;

const ContainerUseMemoPage = styled.div`
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