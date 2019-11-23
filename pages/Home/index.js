import React from 'react'
import './index.less';

class Home extends React.Component {
  static async getInitialProps() {
    return {articalList: 'aa', widthHeader: false, withFooter: true};
  }

  render() {
    const { articalList = '' } = this.props;
    return (
      <h2>首页</h2>
    )
  }
}

export default Home;
