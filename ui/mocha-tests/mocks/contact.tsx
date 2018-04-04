import * as React from "react";
import { Contact } from "../../components/contact/contact";
import { ContactListItem } from "../../components/contact/ContactListItem";

export const mockContacts : () => Array<Contact> = function() {
    return [
        {id: 1, score: 25, firstName: "Chandler", lastName: "Bing", name: "Chandler Bing", company: {name: "Amazon", score: 65}, companyName: "Amazon"},
        {id: 2, score: 45, firstName: "Rachel", lastName: "Greene", name: "Rachel Greene", company: {name: "Pottery Barn", score: 90}, companyName: "Pottery Barn"},
        {id: 3, score: 65, firstName: "Joey", lastName: "Tribiani", name: "Joey Tribiani", company: {name: "Amazon", score: 65}, companyName: "Amazon"},
        {id: 4, score: 15, firstName: "Monica", lastName: "Geller", name: "Monica Geller", company: {name: "Popeyes", score: 10}, companyName: "Popeyes"},
    ];
};

export const mockedContactComponents : (contactName : string) => any = function(contactName : string) {
    var contactObject : any = {
        "Chandler": <ContactListItem key={1} id={1} name={"Chandler Bing"} firstName={"Chandler"} lastName={"Bing"} score={25} companyName={"Amazon"} />,
        "Rachel": <ContactListItem key={2} id={2} name={"Rachel Greene"} firstName={"Rachel"} lastName={"Greene"} score={45} companyName={"Pottery Barn"} />,
        "Joey": <ContactListItem key={3} id={3} name={"Joey Tribiani"} firstName={"Joey"} lastName={"Tribiani"} score={65} companyName={"Amazon"} />,
        "Monica": <ContactListItem key={4} id={4} name={"Monica Geller"} firstName={"Monica"} lastName={"Geller"} score={15} companyName={"Popeyes"} />,
    };
    return contactObject[contactName];
}