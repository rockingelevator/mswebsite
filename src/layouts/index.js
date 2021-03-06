import React, { Component } from 'react';
import { func, object } from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';
import Script from 'react-load-script';

import { Header, Footer } from '../components';
// import { Container as BaseContainerStyles } from '../styledComponents/layout';

import './index.css';
import './body.css';

// const Container = BaseContainerStyles.extend`
//   padding-top: 0;
//   min-height: 100%;
// `;

// class Layout extends Component {
//   static propTypes = {
//     children: func,
//     data: object,
//   };
//
//   // componentDidMount() {
//   //   // const script = document.createElement('script');
//   //   const evt = document.createEvent('Event');
//   //
//   //   // script.src = withPrefix('/scripts/dots.js');
//   //   // script.async = true;
//   //
//   //   // document.body.appendChild(script);
//   //   //
//   //   evt.initEvent('load', false, false);
//   //   window.dispatchEvent(evt);
//   // }
//
//   render() {
//     const { children, data } = this.props;
//     return (
//       <div>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: 'Sample' },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         />
//         <Header title={data.site.siteMetadata.title} />
//         {children()}
//         <Footer />
//         <Script
//           url={withPrefix('/scripts/dots.js')}
//           onLoad={() => console.log('dots loaded')}
//           onError={() => console.log('error while loading dots')}
//         />
//       </div>
//     );
//   }
// }

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'msapplication-TileColor', content: '#eeeeee' },
        { name: 'theme-color', content: '#ffffff' },
      ]}>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333" />
      <script src={withPrefix('/scripts/particles.js')} />
    </Helmet>
    <Header title={data.site.siteMetadata.title} />
    {children()}
    <Footer />
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
