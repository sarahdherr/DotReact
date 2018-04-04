import * as React from "react";
import ListHOC from "./ListHOC";
import { CompanyList } from "../components/company/CompanyList";
import { ContactList } from "../components/contact/ContactList";
import { nameMapping } from "../helpers/contactHelpers";
import { ListType } from "./enums/listTypes";

interface ListContainerProps { listType : ListType }

export const ListContainer = (props : ListContainerProps) => {
    const CompanyListContainer : React.ComponentClass = ListHOC("Companies", CompanyList, "api/companies", (el : any) => el);
    const ContactListContainer : React.ComponentClass = ListHOC("Contacts", ContactList, "api/contacts", nameMapping);
    return (
        <div>
            {
                props.listType === ListType.Company
                ? <CompanyListContainer />
                : <ContactListContainer />
            }
        </div>
    )
}
