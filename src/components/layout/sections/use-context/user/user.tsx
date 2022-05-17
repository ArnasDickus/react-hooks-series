import { AppContext } from '@pages/use-context'
import React, { useContext } from 'react'

const User = () => {
    const appContext = useContext(AppContext);
  return (
    <div>User: {appContext?.userName}</div>
  )
}

export default User