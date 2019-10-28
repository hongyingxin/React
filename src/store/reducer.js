import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store/index'
import { reducer as homeReaducer } from '../pages/home/store/index'
import { reducer as detailReducer } from '../pages/detail/store/index'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReaducer,
  detail: detailReducer
})

export default reducer;