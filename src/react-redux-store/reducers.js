import { combineReducers } from 'redux';
import { SET_COURSE, SET_SPEED } from './actions';

const initialState = {
    course: "south",
    speed: 0
};

function reducer_SetCourse(state = initialState.course, action) {
    //Здесь агрумент state - не всё состояние целиком, а только та его часть, изменение которой осуществляет данный редьюсер (в данном случае - course).
    switch (action.type) {
        case SET_COURSE: 
            return action.course;
        default:
            return state;
    }    
}

function reducer_SetSpeed(state = initialState.speed, action) {
    switch (action.type) {
        case SET_SPEED: 
            return action.speed;
        default:
            return state;
    }    
}

const mainReducer = combineReducers({
    course: reducer_SetCourse,
    speed: reducer_SetSpeed
});

/*
Эквивалентная по смыслу запись:
function mainReducer(state={}, action) {
    return {
        course: reducer_SetCource(state.course, action),
        speed: reducer_SetSpeed(state.speed, action)
    }
}
*/

/*
    //Нужно обязательно вернуть полностью новый объект состояния, а не старый state, даже если б в том ничего не поменялось.
    return Object.assign({}, state, { course: action.course});
*/

export default mainReducer;