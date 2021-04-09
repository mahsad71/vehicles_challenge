import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

//clean up everything after each test to avoid memory leaks
afterEach(cleanup);

it("should take a snapshot", () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});
