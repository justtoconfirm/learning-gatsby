import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/Navigation'

const Home = ({ data }) => {

	const { title, description } = data.site.siteMetadata

    return (
    	<>
    		<Navigation />
    		
    		<h1>{title}</h1>
    		<p>{description}</p>
    	</>
    )
}

export const pageQuery = graphql`
	query MetadataQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`

export default Home