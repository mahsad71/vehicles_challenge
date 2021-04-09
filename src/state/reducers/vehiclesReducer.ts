import { ActionType } from "../action-types";
import { Action } from "../actions";
import Vehicle from "../../types/Vehicle";

//List Type
interface ListState {
  loading: boolean;
  error: string | null;
  data:  Vehicle[];
}

//initaial state
const initialState = {
  loading: true,
  error: null,
  data: [],
};

const vehicleReducer = (
  state: ListState = initialState,
  action: Action
): ListState => {
  switch (action.type) {
    case ActionType.LOAD_VEHICLES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.LOAD_VEHICLES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    case ActionType.LOAD_VEHICLES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default vehicleReducer;
