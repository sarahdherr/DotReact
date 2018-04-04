import * as React from "react";
import { ListType } from "../containers/enums/listTypes";

interface NavProps { handleClick: (e : any, listType : ListType) => void }

export const NavButtons = (props: NavProps) =>
    <div className="navbtns">
        <button className="navbtns-btn" onClick={(e) => props.handleClick(e, ListType.Company)}>
            <span className="fa fa-building navbtns-icon-comp" />
        </button>
        <button className="navbtns-btn" onClick={(e) => props.handleClick(e, ListType.Contact)}>
            <span className="fa fa-user navbtns-icon-user" />
        </button>
    </div>