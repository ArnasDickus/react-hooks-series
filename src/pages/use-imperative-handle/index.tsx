import Layout from '@components/layout/layout'
import CustomButton from '@components/use-imperative-handle/button'
import { IHeadSeo } from '@shared/interfaces'
import React, { useRef } from 'react'

const UseImperativeHandle = () => {
    const buttonRef = useRef<any>(null);
    const headSeoData: IHeadSeo = {
        title: "Use Imperative Handle",
        content: "Use Imperative Handle",
        description: "Training for useImperativeHandle hook"
      }
      
  return (
    <Layout headSeoData={headSeoData}>
        <button onClick={() => {
            if(buttonRef !== null) {
                buttonRef.current.alterToggle()
            }}}
            >
            Button From Parent
        </button>
        <CustomButton  ref={buttonRef} />
    </Layout>
  )
}

export default UseImperativeHandle