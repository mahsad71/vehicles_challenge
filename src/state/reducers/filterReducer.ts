import { FilterType } from "../action-types";
import { FilterAction } from "../actions";
import FilterList from "../../types/FilterList";

//List Type
interface ListState {
  filters: FilterList;
}

//initaial state
const initialState = {
  filters: { status: "", customer: [] },
};

const vehicleReducer = (
  state: ListState = initialState,
  action: FilterAction
): ListState => {
  switch (action.type) {
    case FilterType.LOAD_FILTERS:
      const a = {
        ...state,
        filters: action.payload,
      };
      return a;
    default:
      return state;
  }
};

export default vehicleReducer;
