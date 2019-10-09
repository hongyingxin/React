import axios from 'axios';
import * as constants from './constants'

const changHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  articleList:result.articleList,
  recommendList:result.recommendList,
  topicList:result.topicList
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