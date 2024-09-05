import { combineReducers } from "redux";
import Login from "./Login/reducer";

const rootReducer = combineReducers({
    // public
    Login,
});

export default rootReducer;