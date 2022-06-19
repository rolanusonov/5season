import {createStore} from "redux";
import {reducer} from "./Reduser"
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
export const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
