import { FilterType } from "../action-types";
import FilterList from "../../types/FilterList";

export const setFilters = (filterItems: FilterList) => {
  return { type: FilterType.LOAD_FILTERS, payload: filterItems };
};
