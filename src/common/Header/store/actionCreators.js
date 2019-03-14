import * as actionTypes from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'

//private
const initRecommendList = (recommendList) => ({
    type: actionTypes.INIT_RECOMMEND_LIST,
    recommendList: fromJS(recommendList),
    totalPage: Math.ceil(recommendList.length / 10)
});

//public
export const changeInputType = (inputType) => ({
    type: actionTypes.CHANGE_INPUT_TYPE,
    inputType
});
export const changeMouseType = (mouseType) => ({
    type: actionTypes.CHANGE_MOUSE_TYPE,
    mouseType
});
export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
});

export const getRecommendList = () => {
    return (dispatch) => {
        axios.get('/header/searchRecommend').then(res => {
            const action = initRecommendList(res.data);
            dispatch(action);
        })
    }
};