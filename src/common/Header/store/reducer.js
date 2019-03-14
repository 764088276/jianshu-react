import {actionTypes} from './index'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseIn:false,
    //fromJS会将内部的对象转化为immutable对象
    recommendList: [],
    page:1,
    totalPage:1
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INPUT_TYPE:
            return state.set('focused', action.inputType);
        case actionTypes.CHANGE_MOUSE_TYPE:
            return state.set('mouseIn',action.mouseType);
        case actionTypes.INIT_RECOMMEND_LIST:
            return state.merge({
                recommendList:action.recommendList,
                totalPage:action.totalPage
            });
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state
    }
}