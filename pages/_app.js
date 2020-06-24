/**
 * @author zhangjicheng
 * @email zhangjichengcc@163.com
 * @date 2019/11/25
 */
import App, {Container} from 'next/app';
import Head from 'next/head';
import BasicLayout from '../components/Layouts/BasicLayout';
import React from 'react';
import Router from 'next/router';
import loading from '@/utils/loading/index.js';
import '../utils/global.less';

const { pageLoading } = loading;

const handleRouteChangeStart = url => {
  pageLoading(1)
}

const handleRouteChangeComplete = url => {
  pageLoading(0);
}

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {pageProps}
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', handleRouteChangeStart);
    Router.events.off('routeChangeComplete', handleRouteChangeComplete);
  }

  render () {
    const {Component, pageProps} = this.props;
    return (
      <Container>
        <Head>
          <script src="http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js"></script>
        </Head>
        <BasicLayout {...pageProps}>
          <Component {...pageProps} />
        </BasicLayout>
      </Container>
    )
  }
}