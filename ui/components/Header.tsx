import * as React from "react";

interface HeaderProps { name : string };

export const Header = (props : HeaderProps) =>
    <div className="header">
        <h3 className="header-text">{props.name}</h3>
    </div>