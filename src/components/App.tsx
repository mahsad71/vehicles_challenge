import React from "react";
import { Provider } from "react-redux";

import VehiclesComponent from "./VehiclesComponent";
import Header from "./Header";
import NewsLetter from "./NewsLetter";
import { store } from "../state";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <VehiclesComponent />
      <NewsLetter />
    </Provider>
  );
};

export default App;
