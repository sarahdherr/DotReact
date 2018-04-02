import * as React from "react";
import { Score } from "../Score";
import { Contact } from "./contact";
import { getInitials } from "../../helpers/contactHelpers";

export const ContactListItem = (props : Contact) => 
    <div className="listitem">
        <div className="listitem-contacticon-container">
            <p className="listitem-contacticon">{getInitials(props.firstName, props.lastName)}</p>
        </div>
        <div>
            <p className="listitem-contactname-text">{props.name}</p>
            <p className="listitem-contactcomp-text">{props.companyName}</p>
        </div>
        <Score score={props.score} />
    </div>