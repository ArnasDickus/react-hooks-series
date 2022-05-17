
import Layout from '@components/layout/layout'
import Login from '@components/layout/sections/use-context/login/login';
import User from '@components/layout/sections/use-context/user/user';
import { IHeadSeo } from '@shared/interfaces'
import React, { useEffect, useState, createContext } from 'react'
import styled from 'styled-components';

interface IAppContext {
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<IAppContext | null>(null);

const useContextPage = () => {
  const headSeoData: IHeadSeo = {
    title: "Use Context Page",
    content: "Use Context hooks",
    description: "Training for Context hook"
  }
  const [userName, setUserName] = useState("");

  return (
    <Layout headSeoData={headSeoData}>
      <ContaineruseContextPage>
        <AppContext.Provider value={{userName, setUserName}}>
       <Login />
        <User /> 
        </AppContext.Provider>

        
        {/* Working simple example */}
        {/* <Login setUserName={setUserName} />
        <User userName={userName} /> */}
      </ContaineruseContextPage>
    </Layout>
  )
}

export default useContextPage;

const ContaineruseContextPage = styled.div`
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