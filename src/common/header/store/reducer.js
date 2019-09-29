import * as constants from './constants';
import { fromJS } from 'immutable';

/*
    immutable库
    immutable对象
*/

const defaultState = fromJS({
  focused : false
});

export default (state = defaultState, action) => {
  if(action.type === constants.SEARCH_FOCUS) {
    /*  
        immutable对象的set方法，会结合之前immutable对象
        的值和设置的值，返回一个全新的对象  
    */
    return state.set('focused',true)
  }
  if(action.type === constants.SEARCH_BLUR) {
    return state.set('focused',false)
  }
  return state
}