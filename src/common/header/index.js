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
  SearchInfoItem,
  SearchInfoList
} from './style'

class Header extends Component{

  getListArea = () => {

    /* list是immutable类型 */
    const { focused, list, page, totalPage, mouseIn, handMouseEnter, handMouseLeave, handleChangePage} = this.props;
    /* toJS  将immutable类型转化成普通的js类型 */
    const newList = list.toJS();
    const pageList = [];

		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}

    if(focused || mouseIn) {
      return (
          <SearchInfo 
            onMouseEnter={handMouseEnter}
            onMouseLeave={handMouseLeave}
          >
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch
                onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
              >
                <i ref={(icon) => {this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
                换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
						  {pageList}
					</SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
  }

  render() {

    const { focused, list, handleInputFocus, handleInputBlur} = this.props

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
              // onFocus = {handleInputFocus}
              onFocus = { () => handleInputFocus(list)}
              onBlur = {handleInputBlur}
            >
            </NavSearch>
          </CSSTransition>
            <i className = {focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    /*鼠标移入Input框*/
    handleInputFocus(list) {
      
      /*避免无意义的请求发送*/
      (list.size === 0 ) && dispatch(actionCreators.getList())

      /*获取ajax数据*/
      // dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    /*鼠标移除Input框*/
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    /*热门搜索移入*/
    handMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    /*热门搜索移除*/
    handMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    /*换一换*/
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle) {
        originAngle = parseInt(originAngle, 10)
      }else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      // spin.style.transform = 'rotate('+(originAngle + 360)+'deg)'
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      }else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}
/* 容器组件 */
export default connect(mapStateToProps, mapDispatchToProps)(Header);