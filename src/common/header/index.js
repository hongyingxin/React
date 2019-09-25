import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavSearch } from './style'
import { NavItem } from 'd:/BaiduNetdiskDownload/React16.4 开发简书项目 从零基础入门到实战/project/c41g3s/src/common/header/style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <NavSearch></NavSearch>
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header;