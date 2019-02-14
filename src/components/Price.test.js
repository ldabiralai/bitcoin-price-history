import React from "react";
import { shallow } from "enzyme";
import Price from "./Price";

describe("Price", () => {
  it("should append USD", () => {
    const component = shallow(<Price>1234</Price>);

    expect(component.text()).toEqual("1234 USD");
  });
});
