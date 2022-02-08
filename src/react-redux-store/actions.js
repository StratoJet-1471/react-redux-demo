//Action types:
export const SET_COURSE = "SET_COURSE";
export const SET_SPEED = "SET_SPEED";

//Action creators:
export function setCourse(course) {
    return {
        type: SET_COURSE,
        course
    };
}

export function setSpeed(speed) {
    return {
        type: SET_SPEED,
        speed
    };
}