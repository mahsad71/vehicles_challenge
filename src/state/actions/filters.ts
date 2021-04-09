import { FilterType } from "../action-types";
import FilterList from "../../types/FilterList";

export interface LoadFilterVehiclesAction {
  type: FilterType.LOAD_FILTERS;
  payload: FilterList;
}