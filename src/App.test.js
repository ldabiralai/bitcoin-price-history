import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import Price from "./components/Price";
import ErrorMessage from "./components/ErrorMessage";

describe("App", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should not show average price by default", () => {
    expect(component.find(Price)).toHaveLength(0);
  });

  it("should show price once it is available", () => {
    component.setState({
      isLoaded: true,
      averagePrice: "1234.00"
    });

    expect(component.find(Price).props().children).toEqual("1234.00");
  });

  it("should not show error by default", () => {
    expect(component.find(ErrorMessage)).toHaveLength(0);
  });

  it("should show error if needed", () => {
    component.setState({
      isError: true
    });

    expect(component.find(ErrorMessage)).toHaveLength(1);
  });
});
