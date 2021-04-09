import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import axiosApi from "./apis/axiosApi";
import Vehicle from "../../types/Vehicle";

export const fetchVehicles = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOAD_VEHICLES,
    });
    try {
      const { data } = await axiosApi.get("/vehicles");
      //to simulate vehicle status changes randomly each configurable time      
      const randomData = data.map((vehicle: Vehicle) => {
        //if random === 1 => set status connection to disconnected
        //else => set status connection to disconnected
        const random = Math.floor(Math.random() * 2) + 1;
        if (random === 1) return { ...vehicle, status: "Disconnected" };
        else return { ...vehicle, status: "Connected" };
      });
      
      dispatch({ type: ActionType.LOAD_VEHICLES_SUCCESS, payload: randomData });
    } catch (e) {      
      dispatch({ type: ActionType.LOAD_VEHICLES_ERROR, payload: e.message });
    }
  };
};

