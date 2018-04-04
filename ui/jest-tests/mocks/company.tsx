import * as React from "react";
import { Company } from "../../components/company/company";
import { CompanyListItem } from "../../components/company/CompanyListItem";

export const mockCompanies : () => Array<Company> = function() {
    return [
        {id: 1, name: "DotAlign", score: 88}, 
        {id: 2, name: "DotForce", score: 18}, 
        {id: 3, name: "Font Awesome", score: 39}, 
        {id: 4, name: "Arizona", score: 81}];
};

export const mockedCompanyComponents : (companyName : string) => any = function(companyName : string) {
    var companyObject : any = {
        "DotAlign": <CompanyListItem key={1} id={1} name={"DotAlign"} score={88} />,
        "DotForce": <CompanyListItem key={2} id={2} name={"DotForce"} score={18} />, 
        "Font Awesome": <CompanyListItem key={3} id={3} name={"Font Awesome"} score={39} />, 
        "Arizona": <CompanyListItem key={4} id={4} name={"Arizona"} score={81} />
    };
    return companyObject[companyName];
}