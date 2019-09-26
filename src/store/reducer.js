import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../common/header/store/index'

const reducer = combineReducers({
  header: headerReducer
})

export default reducer;