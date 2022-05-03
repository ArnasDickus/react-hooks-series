import type { NextPage } from 'next'
import Layout from '../components/layout/layout'
import { IHeadSeo } from '../shared/interfaces'


const Home: NextPage = () => {
  const headSeoData: IHeadSeo = {
    title: "Use State Page",
    content: "Use State hooks",
    description: "Training for useState hook"
  }
  return (
    <Layout headSeoData={headSeoData}>
      <div>Home Page</div>
    </Layout>
  )
}

export default Home
