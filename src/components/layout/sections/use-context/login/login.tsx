import { AppContext } from '@pages/use-context';
import React, { useContext } from 'react'


const Login = () => {
    const appContext= useContext(AppContext);
  return (
    <div><input onChange={(event) => {
        appContext?.setUserName(event?.target?.value);
    }}/> </div>
  )
}

export default Login