import React from 'react';
import Helmet from 'react-helmet';

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: page } = data; // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container">
      <Helmet
        title={`${page.frontmatter.title} | ${data.site.siteMetadata.title}`}
      />
      <div className="blog-post">
        <h1>{page.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        subtitle
        teaser
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
