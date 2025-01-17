import React, { PureComponent } from 'react';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <HomeWrapper>

        <HomeLeft>
          <img alt="" className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
					<Topic />
					<List />
        </HomeLeft>

        <HomeRight>
          <Recommend />
					<Writer />
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null} 
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

/*当组件销毁的时候，需要将监听事件移除*/
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({

  changeHomeData() {
    /* action为一个函数，dispatch这个函数 */
    const action = actionCreators.getHomeInfo();
    dispatch(action)
  },

  changeScrollTopShow() {
    let marigTop = document.documentElement.scrollTop;
    if(marigTop > 400) {
      dispatch(actionCreators.toggleTopShow(true))
    }else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }

})

export default connect(mapState, mapDispatch)(Home);