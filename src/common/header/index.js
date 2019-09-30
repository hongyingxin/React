import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store/index'
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  NavItem,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style'

class Header extends Component{

  getListArea = () => {

    const { focused, list } = this.props

    if(focused) {
      return (
          <SearchInfo>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <div>
              {
                list.map((item) => {
                  return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                })
              }
            </div>
        </SearchInfo>
      )
    }else {
      return null
    }
  }

  render() {

    const { focused, handleInputFocus, handleInputBlur} = this.props

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
          <CSSTransition
            in={focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className = {focused ? 'focused' : ''}
              onFocus = {handleInputFocus}
              onBlur = {handleInputBlur}
            >
            </NavSearch>
          </CSSTransition>
            <i className = {focused ? 'focused iconfont' : 'iconfont'}>
              &#xe614;
            </i>
            {this.getListArea()}
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


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      /*获取ajax数据*/
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}
/* 容器组件 */
export default connect(mapStateToProps, mapDispatchToProps)(Header);