import React, { Fragment } from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import { navLinks } from './nav-links/nav-links';
import { LargeWrapper } from '@components/wrappers';

const Header = () => {
  return (
    <ContainerHeader>
      <LargeWrapper>
        <div>
          <Link href="/">
            <h1 className="title">React Hooks Tutorial</h1>
          </Link>
        </div>
        <nav className="nav">
          <ul className="ul">
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
      </LargeWrapper>
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

  .nav {
    display: flex;
    align-items: center;
  }
  
  .ul {
    display: flex;
    gap: 10px;
  }

  .link {
    text-decoration: none;
    color: ${props => props.theme.colors.textColor1};
    &:hover {
      border-bottom: 1px solid ${props => props.theme.colors.textHover1};
    }
  }
`