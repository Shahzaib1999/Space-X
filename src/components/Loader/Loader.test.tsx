import React from "react";
import { shallow } from "enzyme";
import { Loader } from ".//Loader";
describe("App", () => {
  let container: any;

  beforeEach(() => (container = shallow(<Loader />)));

  it("should render 1 img", () => {
    expect(container.find("img").length).toEqual(1);
  });
});
