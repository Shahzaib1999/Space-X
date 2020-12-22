import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { LaunchListContainer } from "./components/LaunchList/LaunchListContainer";
import { Loader } from "./components/Loader/Loader";
// test("renders the component", () => {
//   const component = shallow(<App />);
//   expect(component).toMatchSnapshot();
// });

describe("App", () => {
  let container: any;
  // const component = shallow(<App />);
  
  beforeEach(() => (container = shallow(<App />)));

  // const childComponent = shallow(<App {...childProps} />);
  // expect(component.containsMatchingElement(<LaunchListContainer/>)).toEqual(true);


  it("should render 1 div", () => {
    expect(container.find("div").length).toEqual(1);
  });

  it("should render 1 img", () => {
    expect(container.find("img").length).toEqual(1);
  });

  it("should render the Loader Component", () => {
    expect(container.containsMatchingElement(<LaunchListContainer />)).toEqual(true);
  });
});