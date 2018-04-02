import * as React from "react";

interface NavProps { handleClick: (e : any, showCompany : boolean) => void }

export const NavButtons = (props: NavProps) =>
    <div className="navbtns">
        <button className="navbtns-btn" onClick={(e) => props.handleClick(e, true)}>
            <span className="fa fa-building navbtns-icon-comp" />
        </button>
        <button className="navbtns-btn" onClick={(e) => props.handleClick(e, false)}>
            <span className="fa fa-user navbtns-icon-user" />
        </button>
    </div>