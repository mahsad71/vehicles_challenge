import {
  LoadVehiclesAction,
  LoadVehiclesErrorAction,
  LoadVehiclesSuccessAction,
} from "./vehicles";

import {
  LoadFilterVehiclesAction
} from "./filters";

//Action Type
export type Action =
  | LoadVehiclesAction
  | LoadVehiclesErrorAction
  | LoadVehiclesSuccessAction;

  export type FilterAction = LoadFilterVehiclesAction;
