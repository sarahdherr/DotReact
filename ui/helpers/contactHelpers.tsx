import { Contact, ContactData } from "../components/contact/contact";

export function nameMapping(contacts : Array<ContactData>) : Array<Contact> {
    return contacts.map((contactData : ContactData) : Contact => {
        var nameArr = contactData.name.split(" ");
        var contact : Contact = { ...contactData };
        contact.firstName = nameArr[0];
        contact.lastName = nameArr[1];
        return contact;
    });
}

export function getInitials(firstName : string, lastName : string) : string {
    var first = firstName[0].toUpperCase();
    var last = lastName[0].toUpperCase();
    return `${first}${last}`;
}