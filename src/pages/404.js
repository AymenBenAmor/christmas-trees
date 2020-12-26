import * as React from "react"
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  const title = 'Christmas tree not found';
  const description = 'sorry but we did not find your christmas tree';
  return (
    <Layout title={title} description={description}>
      <SEO title={title} description={description} />
    </Layout>
  )
}

export default NotFoundPage
