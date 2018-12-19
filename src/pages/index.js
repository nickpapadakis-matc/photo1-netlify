import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import StarButton from '../components/StarButton/starButton.js'
import Layout from '../components/Layout/layout.js'

const Index = ({ data }) => {
  const photos = data.allContentfulPhotoGallery.edges[0].node.images

  const Img = styled.div`
    cursor: pointer;
    width: 70%;
    margin: 0 auto;
    border-radius: 50px 50px 50px 50px;

    &:hover {
      width: 85%;
      height: 85%;
      animation: fade 0.8s;
    }
  `
  const Title = styled.h3`
    text-align: center;
    text-decoration: none;
    color: black;
  `

  return (
    <Layout>
      {photos.map(photo => (
        <div>
          <br />
          <br />
          <Img>
            <img src={photo.photo.file.url} alt="" />
          </Img>
          <Title>{photo.title}</Title>

          <StarButton />
        </div>
      ))}

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
export default Index

export const query = graphql`
  query PhotoQuery {
    allContentfulPhotoGallery {
      edges {
        node {
          images {
            title
            photo {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`
