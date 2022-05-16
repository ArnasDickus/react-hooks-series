/* eslint-disable react/no-unescaped-entities */
import Layout from '@components/layout/layout'
import { IHeadSeo } from '@shared/interfaces'
import React, { useRef } from 'react'
import styled from 'styled-components';


const UseRef = () => {
  const headSeoData: IHeadSeo = {
    title: "Use State Page",
    content: "Use State hooks",
    description: "Training for useState hook"
  }
    // According to netflix useRef should be avoided at all.
    // https://youtu.be/kDARP5QZ6nU?t=682
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
      if(inputRef) {
        inputRef?.current?.focus();
      }
    
      console.log(inputRef, 'inputRef');
  }
  return (
    <Layout headSeoData={headSeoData}>
      <ContainerUseRef>
          <div className="wrapper">
            <div>
                <h1>Pedro</h1>
                <input type="text" placeholder="Ex..." ref={inputRef} />
                <button onClick={onClick}>Change Name</button>
            </div>
          </div>
      </ContainerUseRef>
    </Layout>
  )
}

export default UseRef;

const ContainerUseRef = styled.div`
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