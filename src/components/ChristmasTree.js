import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const query = graphql`
  query {
    file(relativePath: { eq: "christmas-tree.png" }) {
      childImageSharp {
        fixed(width: 900, height: 1300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const ChristmasTree = () => {
  const { file } = useStaticQuery(query);
  return (
    <div className="flex-row justify-center w-full text-center">
      <Img fixed={file.childImageSharp.fixed} alt="Beautiful christmas tree with ornaments" />
    </div>
  )
}

export default ChristmasTree;
