import React, { Component } from 'react';
import { func, object } from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';

import { Header, Footer } from '../components';
import { Container as BaseContainerStyles } from '../styledComponents/layout';

import './index.css';
import './body.css';

const Container = BaseContainerStyles.extend`
  padding-top: 0;
  min-height: 100%;
`;

class Layout extends Component {
  static propTypes = {
    children: func,
    data: object,
  };

  componentDidMount() {
    const script = document.createElement('script');

    script.src = withPrefix('/scripts/dots.js');
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    const { children, data } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        {children()}
        <Footer />
      </div>
    );
  }
}

// const Layout = ({ children, data }) => (
//   <div>
//     <Helmet
//       title={data.site.siteMetadata.title}
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     <Header title={data.site.siteMetadata.title} />
//     {children()}
//     <Footer />
//   </div>
// );
//
// Layout.propTypes = {
//   children: func,
//   data: object,
// };

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
