import * as actionTypes from './actionTypes'

export const changeInputType=(inputType)=>({
    type:actionTypes.CHANGE_INPUT_TYPE,
    inputType
});