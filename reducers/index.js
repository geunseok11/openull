import { combineReducers } from "redux";
import goods from "./goods";
import sale from "./sale";

const rootReducer = combineReducers({
  goods,
  sale,
});

export default rootReducer;
