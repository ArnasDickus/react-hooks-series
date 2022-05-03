import React from 'react'
import Layout from '../../components/layout/layout'
import { IHeadSeo } from '../../shared/interfaces'

const UseStatePage = () => {
  const headSeoData: IHeadSeo = {
    title: "Use State Page",
    content: "Use State hooks",
    description: "Training for useState hook"
  }
  return (
    <Layout headSeoData={headSeoData}>
      <div>UseStatePage</div>
    </Layout>
  )
}

export default UseStatePage