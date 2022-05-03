import { IHeadSeo } from '@shared/interfaces';
import React from 'react'
import HeadSeo from './head-seo/head-seo';
import Footer from './sections/footer/footer'
import Header from './sections/header/header'

interface ILayout {
    children: React.ReactNode
    headSeoData: IHeadSeo;
}

const Layout = (props: ILayout) => {
  return (
    <>
    <HeadSeo {...props.headSeoData} />
    <Header />
    <main>{props.children}</main>
    <Footer />
    </>
  )
}

export default Layout