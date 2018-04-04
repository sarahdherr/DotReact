import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import { spy } from "sinon";
import { CompanyList } from "../../ui/components/company/CompanyList";
// import ListHOC from "../../ui/containers/ListHOC";
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

spy(CompanyList.prototype, "componentDidMount");
describe("List Higher Order Component", () => {
    // before(() => {
    //     var mock = new MockAdapter(axios);
    //     mock.onGet("https://shielded-everglades-49151.herokuapp.com/api/companies").reply(200, {
    //         compaies: [
    //             {id: 1, name: "HyVee", score: 88},
    //             {id: 2, name: "Whiteys", score: 30}
    //         ]
    //     });
    // });

    // describe("axios is called", () => {
    //     it("should do something", () => {
    //         var List = ListHOC("Companies", CompanyList, "/api/companies", (el: object) => el);
    //         console.log(List);
            
    //     })
    // })
    // it("calls componentDidMount", function() {
    //     const wrapper = mount(<CompanyList />);
    //     expect(CompanyList.prototype.componentDidMount.calledOnce).to.equal(true);
    // })
})