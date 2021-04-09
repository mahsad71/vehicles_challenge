import React from "react";
import { render, cleanup } from "@testing-library/react";
import { createStore, applyMiddleware  } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux'
import VehiclesComponent from "./VehiclesComponent";
import reducers from "../state/reducers"
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('react-i18next', () => ({
    useTranslation: () => {
      return {
        t: (str:any) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      };
    },
  }));

const renderWithRedux = (
    component:any,
    //@ts-ignore
    { initialState:any, store = createStore(reducers, {}, applyMiddleware(thunk)) } = {}
  ) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    }
  }
  
   afterEach(cleanup);

it("should load and display the data", async () => {

  const response = [
    {
      vid: "YS2R4X20005399401",
      name: "Kalles Grustransporter AB",
      address: "Cementvägen 8, 111 11 Södertälje",
      regNum: "ABC123",
      status:"Connected"
    }
  ]

  mockedAxios.get.mockResolvedValueOnce({ data: response});
  //@ts-ignore
    renderWithRedux(<VehiclesComponent />, {data:[], loading:true, error:null});

});
