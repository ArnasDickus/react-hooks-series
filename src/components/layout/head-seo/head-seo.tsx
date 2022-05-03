import React from 'react'
import Head from 'next/head'
import { IHeadSeo } from '@shared/interfaces';

const HeadSeo = (props: IHeadSeo) => {
  const { title, description, content } = props;
  return (
    <Head>
        <title>{title}</title>
        <meta name={description} content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default HeadSeo