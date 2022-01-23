import React from "react";
import { mount } from "enzyme";
import Glossary from "./Glossary";
import { BrowserRouter } from "react-router-dom";
import { useState as useStateMock } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Glossary", () => {
  let wrapper: any;

  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation((initState) => [
      initState,
      setState,
    ]);
    wrapper = mount(
      <BrowserRouter>
        <Glossary />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders", () => {
    expect(wrapper).toBeTruthy();
  });

  it("sets state when search input changes", () => {
    wrapper.find("input").simulate("change", { target: { value: "localise" } });
    expect(setState).toHaveBeenCalledWith("localise");
  });

  it("empties the search value when the clear icon is clicked", () => {
    wrapper.find("i").simulate("click");
    expect(setState).toHaveBeenCalledWith("");
  });
});
