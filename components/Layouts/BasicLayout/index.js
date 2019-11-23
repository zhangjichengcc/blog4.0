/**
 * @author zhangjicheng
 * @date 2019/11/22
 */

import React from 'react';
import Head from 'next/head';
import Footer from '../../Footer';
import Header from '../../Header';
import classnames from 'classnames';
import './index.less';

class Home extends React.Component {

  componentDidMount() {
    // console.log(process.env.NODE_ENV);
  }

  render() {
    const {
      children,
      withFooter = true,
      withHeader = true,
    } = this.props;
    return (
      <div className={classnames("basicLayout", withFooter && "withFooter")}>
        <Head>
          <meta charset="utf-8" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="format-detection" content="email=no" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no,  viewport-fit=cover" />
        </Head>
        {withHeader && <Header />}
        <div>
          {children}
        </div>
        {withFooter && <Footer />}
      </div>
    )
  }
}

export default Home
