import React from 'react';
import './index.less';
import classnames from 'classnames';
import { withRouter } from 'next/router';
import Router from 'next/router'

const home = '/static/images/components/footer/home.svg';
const homeActive = '/static/images/components/footer/homeActive.svg';
const my = '/static/images/components/footer/my.svg';
const myActive = '/static/images/components/footer/myActive.svg';
const routes = [
  {name: '首页', icon: home, activeIcon: homeActive, url: '/'},
  {name: '我的', icon: my, activeIcon: myActive, url: '/My'},
]

class Footer extends React.Component {

  componentDidMount() {
    global.that = this;
    this.initCom();
    // console.log(process.env.NODE_ENV);
  }

  // componentWillReceiveProps() {
  //   this.initCom();
  // }

  state = {
    selectedTab: '',
  }

  initCom = () => {
    const { router } = this.props;
    const { pathname } = router;
    const routeObj = {
      '/': '首页',
      '/My': '我的',
    }
    const reg = new RegExp(/\/My/)
    const tab = routeObj[pathname] || (reg.test(pathname) ? routeObj['/My'] : '');
    this.setState({selectedTab: tab});
  }

  onTabClick = item => {
    const { name, url } = item;
    this.setState({
      selectedTab: name,
    }, () => {
      Router.push(url);
    })
  }

  render() {
    const { selectedTab = '' } = this.state;
    return (
      <div className="footerBar">
        {
          routes.map((item, idx) => {
            const key = `tab_${idx}`;
            const active = item.name === selectedTab;
            return (
              <div key={key} onClick={() => {this.onTabClick(item)}}>
                <div className={classnames("itemBtn", active && "active")}>
                  <span className="itemIcon" style={{ backgroundImage: `${active ? `url(${item.activeIcon})` : `url(${item.icon})`}` }} />
                  <span className="itemText">{item.name}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default withRouter(Footer)