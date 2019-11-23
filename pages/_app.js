import App, {Container} from 'next/app';
import BasicLayout from '../components/Layouts/BasicLayout';
import React from 'react';
// import Router from 'next/router';
// import pageLoading from '../utils/pageLoading/index.js';
import '../utils/global.less';

// const { globalLoading } = pageLoading;

// const handleRouteChangeStart = url => {
//   console.log(url);
//   globalLoading(1)
// }

// const handleRouteChangeComplete = url => {
//   setTimeout(() => {
//     globalLoading(0);
//   }, 500)
// }

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // const { loading = true } = pageProps;

    // if (loading) {
    //   Router.events.on('routeChangeStart', handleRouteChangeStart);
    //   Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    // }
    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props;
    return <Container>
      <BasicLayout {...pageProps}>
        <Component {...pageProps} />
      </BasicLayout>
    </Container>
  }
}