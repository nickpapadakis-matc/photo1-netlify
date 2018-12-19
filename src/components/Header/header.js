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

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <Img>
        <img src={image} alt="" />
      </Img>
      <H1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
    </Inner>
  </Outer>
)

export default Header
