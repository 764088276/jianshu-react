import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

let defaultState = fromJS({
    topicList: [],
    articalList: [],
    recommendList: [],
    showBackTop:false
});

const setHomeData = (state, actionData) => {
    return state.merge({
        topicList: actionData.topicList,
        articalList: actionData.articalList,
        recommendList: actionData.recommendList
    })
};

const getMoreArtical = (state, action) => {
    return state.set('articalList', state.get('articalList').concat(action.articalList))
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME_DATA:
            return setHomeData(state, action);
        case actionTypes.GET_MORE_ARTICAL:
            return getMoreArtical(state, action);
        case actionTypes.SHOW_BACKTOP:
            return state.set('showBackTop',action.showBackTop);
        default:
            return state
    }
}