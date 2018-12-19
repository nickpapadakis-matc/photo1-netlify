import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../Header/header'
import GlobalStyle from '../GlobalStyle/GlobalStyles'
import styled from 'styled-components'
import netlifyIdentity from 'netlify-identity-widget'

const Content = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }

  componentDidMount() {
    netlifyIdentity.init()
    netlifyIdentity.on('login', user => this.updateCurrentUser())
    netlifyIdentity.on('logout', () => this.updateCurrentUser())
  }

  updateCurrentUser() {
    this.setState({ currentUser: netlifyIdentity.currentUser() })
  }

  login() {
    netlifyIdentity.open()
  }

  logout() {
    netlifyIdentity.logout()
  }

  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <GlobalStyle />
            <Header
              siteTitle={data.site.siteMetadata.title}
              currentUser={this.currentUser}
              login={this.login}
              logout={this.logout}
            />

            <Content>{children}</Content>
          </>
        )}
      />
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
