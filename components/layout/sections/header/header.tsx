import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <ContainerHeader>
      <div>
      <h1>React Hooks Tutorial</h1>
      </div>
      <nav className="nav">
        <p>List items</p>
        <p>List items</p>
        <p>List items</p>
        <p>List items</p>
        <p>List items</p>
      </nav>
    </ContainerHeader>
  )
}

export default Header

const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-right: auto;
  margin-left:  auto;
  max-width: 960px;
  padding-right: 10px;
  padding-left:  10px;

  .nav {
    display: flex;
    align-items: center;
  }
`