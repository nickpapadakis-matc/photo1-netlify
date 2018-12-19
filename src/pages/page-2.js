import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/layout'

const SecondPage = ({ data }) => (
  <Layout>
    <h1>Hi from the second page</h1>

    <p>{data}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
