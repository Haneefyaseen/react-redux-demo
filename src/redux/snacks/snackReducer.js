import { BUY_SNACK } from "./snackTypes"

const initialState = {
    numOfSnacks: 5
}

const snackReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_SNACK: return {
            numOfSnacks: state.numOfSnacks - 1
        }
        default: return state
    }
}

export default snackReducer;