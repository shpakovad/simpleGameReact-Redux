export const GET_INDEX = 'GET-INDEX';
export const COUNTER = 'COUNTER';

const initialState = {
    item: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9}
    ],
    index: 1,
    count: 0,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INDEX:
            return {
                ...state,
                index: action.getIndex = Math.floor(Math.random() * 9)
            };
        case COUNTER :
            return {
                ...state,
                count: action.newCount + 1
            }
    }
    return state
};

export const getRandomIndexAC = (getIndex) => {
    return {type: GET_INDEX, getIndex}
};
export const itemOnClickAC = (newCount) => {
    return {type: COUNTER, newCount}
};

export default reducer