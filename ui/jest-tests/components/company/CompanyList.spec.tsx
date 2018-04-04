import * as React from "react";
import { shallow } from "enzyme";

import { Company } from "../../../components/company/company";
import { CompanyList } from "../../../components/company/CompanyList";
import { CompanyListItem } from "../../../components/company/CompanyListItem";
import { mockCompanies, mockedCompanyComponents } from "../../mocks/company";

it("includes companies that have the search term in their name", () => {
    // Assemble
    var items : Array<Company> = mockCompanies();

    // Act
    var searchTerm : string = "dot";
    var list = shallow(<CompanyList items={items} searchTerm={searchTerm} />);

    // Assert
    var containsDotAlign = list.contains(mockedCompanyComponents("DotAlign"));
    var containsDotForce = list.contains(mockedCompanyComponents("DotForce"));
    expect(containsDotAlign).toBeTruthy();
    expect(containsDotForce).toBeTruthy();
});

it("doesnt includes companies that dont have the search term in their name", () => {
    // Assemble
    var items : Array<Company> = mockCompanies();

    // Act
    var searchTerm : string = "dot";
    var list = shallow(<CompanyList items={items} searchTerm={searchTerm} />);

    // Assert
    var containsFontAwesome = list.contains(mockedCompanyComponents("Font Awesome"));
    var containsArizona = list.contains(mockedCompanyComponents("Arizona"));
    expect(containsFontAwesome).toBeFalsy();
    expect(containsArizona).toBeFalsy();
});