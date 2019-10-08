import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store/index'
import { reducer as homeReaducer } from '../pages/home/store/index'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReaducer
})

export default reducer;