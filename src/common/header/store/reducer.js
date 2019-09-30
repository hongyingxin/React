import * as constants from './constants';
import { fromJS } from 'immutable';

/*
    immutable库
    immutable对象
*/

const defaultState = fromJS({
  focused : false,
  list: []
});

export default (state = defaultState, action) => {

  switch(action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused',true);
      // break;
    case constants.SEARCH_BLUR:
      return state.set('focused',false);
    case constants.CHANGE_LIST:
      return state.set('list', action.data);
    default:
    return state
  }

  // if(action.type === constants.SEARCH_FOCUS) {
  //   /*  
  //       immutable对象的set方法，会结合之前immutable对象
  //       的值和设置的值，返回一个全新的对象  
  //   */
  //   return state.set('focused',true)
  // }
  // if(action.type === constants.SEARCH_BLUR) {
  //   return state.set('focused',false)
  // }
  // if(action.type === constants.CHANGE_LIST) {
  //   /*当你改变list时，list的定义有immutable对象变成普通数组*/
  //   return state.set('list', action.data);
  // }
  // return state
}