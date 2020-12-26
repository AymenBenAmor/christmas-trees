import * as React from "react";
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ChristmasTree from '../components/ChristmasTree';
import Text from '../components/Text';
import GatsbyImage from 'gatsby-image';
import SEO from '../components/SEO';

export const query = graphql`
  query {
    file(relativePath: { eq: "heart.png" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <ChristmasTree />
      <Text text="This is just the first christmas tree! continue Scrolling to find your gift!" />
      <ChristmasTree />
      <Text text="We have more trees!" />
      <ChristmasTree />
      <Text text="... &#128540;" />
      <ChristmasTree />
      <Text text="Continue scrolling!" />
      <ChristmasTree />
      <Text text="... &#128540;" />
      <ChristmasTree />
      <Text text="Do not give up" />
      <ChristmasTree />
      <Text text="Almost there" />
      <ChristmasTree />
      <Text text="Last tree before your gift!" />
      <ChristmasTree />
      <div className="w-full text-center mb-10">
          <a className="underline text-7xl text-red-500 uppercase" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              Here is your amazing gift!
          </a>
      </div>
      <div className="text-center w-full mb-5">
        Created with <GatsbyImage fixed={data.file.childImageSharp.fixed} alt="heart" /> by <a href="https://twitter.com/Aymen_Ben_Amor">@Aymen_Ben_Amor</a>
      </div>
    </Layout>
  )
}

export default IndexPage
