import React from 'react'
import Footer from './sections/footer/footer'
import Header from './sections/header/header'

interface ILayout {
    children: React.ReactNode
}

const Layout = (props: ILayout) => {
  return (
    <>
    <Header />
    <main>{props.children}</main>
    <Footer />
    </>
  )
}

export default Layout