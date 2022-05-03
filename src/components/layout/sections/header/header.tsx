import React, { Fragment } from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import { navLinks } from './nav-links/nav-links';

const Header = () => {
  return (
    <ContainerHeader>
      <div className="wrapper">
        <div>
          <Link href="/">
            <h1 className="title">React Hooks Tutorial</h1>
          </Link>
        </div>
        <nav className="nav">
          <ul>
            {
              navLinks.map((link, index) => {
                return (
                <Fragment key={index}>
                  <Link href={link.routeLink}>
                    <a className="link">{link.routeName}</a>
                  </Link>
                </Fragment>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </ContainerHeader>
  )
}

export default Header

const ContainerHeader = styled.header`
  background-color: ${props => props.theme.colors.darkBlue2f5};
  padding: 0.5rem 1rem;
  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    margin: 0;
    color: ${props => props.theme.colors.textColor1};
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid ${props => props.theme.colors.textHover1};
    }
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-right: auto;
    margin-left:  auto;
    max-width: 960px;
    padding-right: 10px;
    padding-left:  10px;
  }
  .nav {
    display: flex;
    align-items: center;
  }

  .link {
    text-decoration: none;
    color: ${props => props.theme.colors.textColor1};
    &:hover {
      border-bottom: 1px solid ${props => props.theme.colors.textHover1};
    }
  }
`