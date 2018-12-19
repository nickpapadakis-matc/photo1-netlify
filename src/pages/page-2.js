import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/layout'

const SecondPage = ({}) => (
  <Layout>
    <h1>Thanks for the rating</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
