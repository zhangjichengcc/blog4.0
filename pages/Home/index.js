import React from 'react'
import { Button } from 'antd';
import './index.less';
import Axios from '@/utils/axios';

class Home extends React.Component {
  static async getInitialProps() {
    return {articalList: 'aa', widthHeader: false, withFooter: true};
  }

  initData = async () => {
    const res = await Axios.get('/artical/getArticalList');
    console.log(res);
  }

  render() {
    const { articalList = '' } = this.props;
    return (
      <div>
        <h2>首页</h2>
        <Button onClick={this.initData}>666</Button>
      </div>
    )
  }
}

export default Home;
