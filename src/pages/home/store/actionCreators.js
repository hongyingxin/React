import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable'

const changHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList
})

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage: nextPage
})

export const getHomeInfo = () => {
  /* 返回一个函数 */
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changHomeData(result));
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1))
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})