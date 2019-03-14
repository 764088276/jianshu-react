import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'
import axios from 'axios'

const getHomeData = (data) => ({
    type: actionTypes.GET_HOME_DATA,
    topicList: fromJS(data.topicList),
    articalList: fromJS(data.articalList),
    recommendList: fromJS(data.recommend)
});

const getMoreArtical = (list) => ({
    type: actionTypes.GET_MORE_ARTICAL,
    articalList: fromJS(list)
});

export const thunkHomeData = () => {
    return (dispatch) => {
        axios.get('/home/homeData').then((res) => {
            const resData = res.data;
            if (resData.code === 200) {
                const homeData = resData.data;
                const homeDataAction = getHomeData(homeData);
                dispatch(homeDataAction)
            }
        })
    }
};
export const thunkMoreArticalData = () => {
    return (dispatch) => {
        axios.get('home/moreArticalData').then(res => {
            dispatch(getMoreArtical(res.data.articalList))
        })
    }
};
export const showBackTop = (showBackTop) =>({
    type:actionTypes.SHOW_BACKTOP,
    showBackTop
});