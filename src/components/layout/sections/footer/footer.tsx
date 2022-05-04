import { LargeWrapper } from '@components/wrappers'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <ContainerFooter>
      <LargeWrapper>
        <h2 className="title">CodeMedium</h2>
      </LargeWrapper>
    </ContainerFooter>
  )
}

export default Footer

const ContainerFooter = styled.footer`
  background-color: ${props => props.theme.colors.darkBlue2f5};
   
  .title {
    color: ${props => props.theme.colors.textColor1};
    font-weight: 400;
  }
`;