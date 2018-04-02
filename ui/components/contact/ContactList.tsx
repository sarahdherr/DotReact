import * as React from "react";
import { ContactListItem } from "./ContactListItem";
import { Contact } from "./contact";
import { includes } from "../../helpers/utils";

interface ContactListProps { items : Array<Contact>, searchTerm : string };

export const ContactList = (props : ContactListProps) =>
    <div>
        {
            props.items
                .filter((contact : Contact) : boolean => 
                    includes(contact.name, props.searchTerm)
                    || includes(contact.company.name, props.searchTerm)
                )
                .map((contact : Contact) : object => 
                    <ContactListItem 
                        key={contact.id} 
                        id={contact.id}
                        name={contact.name} 
                        firstName={contact.firstName} 
                        lastName={contact.lastName} 
                        score={contact.score} 
                        companyName={contact.company.name}/>
                )
        }
    </div>