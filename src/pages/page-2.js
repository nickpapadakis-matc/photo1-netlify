import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'

const H1 = styled.h1`
  text-align: center;
  font-family: 'Orbitron', sans-serif;
`
const H3 = styled.h3`
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  color: black;
  text-decoration: none;
`
const SecondPage = ({}) => (
  <Layout>
    <H1>Thanks for the rating</H1>
    <Link to="/">
      <H3>HOME</H3>
    </Link>
  </Layout>
)

export default SecondPage
