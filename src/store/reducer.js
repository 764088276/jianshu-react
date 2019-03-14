import {combineReducers} from 'redux-immutable'
import {headerReducer} from '../common/Header/store'
import {homeReducer} from '../pages/Home/store'

//使用redux-immutable中的combineReducers可以将数据变为immutable数据
const reducer=combineReducers({
    header:headerReducer,
    home:homeReducer
});
export default reducer