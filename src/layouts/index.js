import React from 'react';
import { func, object } from 'prop-types';
import Helmet from 'react-helmet';

import { Header } from '../components';
import { Container as BaseContainerStyles } from '../styledComponents/layout';

import './index.css';

const Container = BaseContainerStyles.extend`
  padding-top: 0;
`;

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header title={data.site.siteMetadata.title} />
    <Container>{children()}</Container>
  </div>
);

Layout.propTypes = {
  children: func,
  data: object,
};

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Layout;
