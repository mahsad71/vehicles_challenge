//to combine all the reducers
import { combineReducers } from "redux";
import vehiclesReducer from "./vehiclesReducer";
import filterReducer from "./filterReducer";

const reducers = combineReducers({
  vehicles: vehiclesReducer,
  filters: filterReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
