import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavSearch, Addition, Button, SearchWrapper } from './style'
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
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <i className='iconfont zoom'>
                &#xe614;
              </i>
          </SearchWrapper>
        </Nav>
        <Addition>
					<Button className='writting'>
						<i className="iconfont">&#xe615;</i>
						写文章
					</Button>
					<Button className='reg'>注册</Button>
				</Addition>
      </HeaderWrapper>
    )
  }
}

export default Header;