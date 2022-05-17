
import Layout from '@components/layout/layout'
import WebDevExample from '@components/use-layout-effect/web-dev-example';
import { IHeadSeo } from '@shared/interfaces'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';


const useLayoutEffectPage = () => {
    const inputRef = useRef<HTMLInputElement>(null);

  const headSeoData: IHeadSeo = {
    title: "Use State Page",
    content: "Use State hooks",
    description: "Training for useState hook"
  }

  useLayoutEffect(() => {
    console.log('inputRef', inputRef?.current?.value);
  }, [])

  useEffect(() => {
    inputRef?.current?.value
      console.log('useEffect');
  })
// https://www.youtube.com/watch?v=wU57kvYOxT4
  return (
    <Layout headSeoData={headSeoData}>
      <ContainerUseLayoutEffectPage>
        <div className="wrapper">
        <input ref={inputRef} value="Pedro"/>
        </div>
      <WebDevExample />
      </ContainerUseLayoutEffectPage>
    </Layout>
  )
}

export default useLayoutEffectPage;

const ContainerUseLayoutEffectPage = styled.div`
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