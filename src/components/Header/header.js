import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import image from '../../images/header.png'

const Outer = styled.div`
  background: #95f2df;
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0.2rem 0.2rem;
`
const H1 = styled.h1`
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 5rem;
  font-family: 'Orbitron', sans-serif;
  position: fixed;
  top: 0;
`
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const Img = styled.div`
  width: 30%;
  margin: 0 auto;
`

const ScriptLink = styled.span`
  color: black;
  cursor: pointer;
`

const Login = styled.div`
  margin-left: 1.5rem;
  font-family: 'Orbitron', sans-serif;
`

const Header = ({ siteTitle, currentUser, login, logout }) => (
  <Outer>
    <Inner>
      <Link to="/">
        <Img>
          <img src={image} alt="" />
        </Img>
      </Link>
      <H1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
      <Login>
        {currentUser ? (
          <ScriptLink onClick={logout}>Logout</ScriptLink>
        ) : (
          <ScriptLink onClick={login}>Login</ScriptLink>
        )}
      </Login>
    </Inner>
  </Outer>
)

export default Header
