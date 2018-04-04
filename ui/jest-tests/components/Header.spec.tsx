import * as React from "react";
import { shallow } from "enzyme";

import { Header } from "../../components/Header";

it("renders the heading", () => {
    const result = shallow(<Header name="Test" />).contains(<h3 className="header-text">Test</h3>);
    expect(result).toBeTruthy();
})