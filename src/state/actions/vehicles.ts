import { ActionType } from "../action-types";
import Vehicle from "../../types/Vehicle";
//
export interface LoadVehiclesAction {
  type: ActionType.LOAD_VEHICLES;
}
export interface LoadVehiclesErrorAction {
  type: ActionType.LOAD_VEHICLES_ERROR;
  payload: string;
}
export interface LoadVehiclesSuccessAction {
  type: ActionType.LOAD_VEHICLES_SUCCESS;
  payload:  Vehicle[];
}
