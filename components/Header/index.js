import React from 'react';
import './index.less';
import { Icon } from 'antd';
import classnames from 'classnames';


class Header extends React.Component {
  // static async getInitialProps() {
  //   const articalListData = await Axios.get('/artical/getArticalList');
  //   return {articalList: articalListData.data.list};
  // }

  componentDidMount() {
    // console.log(process.env.NODE_ENV);
  }

  state = {
    selectedTab: '',
  }

  onTabClick = item => {
    const { name } = item;
    this.setState({
      selectedTab: name,
    })
  }

  render() {
    return (
      <div className="headerBar">
        <Icon type="setting" />
      </div>
    )
  }
}

export default Header