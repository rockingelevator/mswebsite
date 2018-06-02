import React from 'react';
import Helmet from 'react-helmet';
import { object } from 'prop-types';
import styled from 'styled-components';

import { Container } from '../styledComponents/layout';
import { PrimarySection } from '../components';

const PageContainer = styled.div`
  padding-top: 30px;
  max-width: 700px;
`;

const filterEmpty = arr => {
  const newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== '') newArr.push(arr.pop());
    else arr.pop();
  }

  return newArr.reverse();
};

const replaceBreaksWithParagraphs = input => {
  const content = filterEmpty(input.split('\n')).join('</p><p>');
  return `<p>${content}</p>`;
};

const StaticPageTemplate = ({ data }) => {
  console.log(data);
  const { markdownRemark: page } = data; // data.markdownRemark holds our post data
  const { path, title, subtitle, teaser } = page.frontmatter;
  return (
    <div>
      <Helmet
        title={`${title}${title ? ' | ' : ''}${data.site.siteMetadata.title}`}
      />
      <PrimarySection
        title={title}
        subtitle={subtitle}
        animation={path === '/'}>
        <div
          dangerouslySetInnerHTML={{
            __html: replaceBreaksWithParagraphs(teaser),
          }}
        />
      </PrimarySection>
      <Container>
        <PageContainer dangerouslySetInnerHTML={{ __html: page.html }} />
      </Container>
    </div>
  );
};

StaticPageTemplate.propTypes = {
  data: object,
};

export default StaticPageTemplate;

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
