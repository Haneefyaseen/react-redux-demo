import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./icecreams/iceCreamReducer";
import snackReducer from "./snacks/snackReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    snack: snackReducer
})

export default rootReducer;