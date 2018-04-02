import * as React from "react";
import { Score } from "../Score";
import { Company } from "./company";

export const CompanyListItem = ( props: Company ) =>
    <div className="listitem">
        <div className="listitem-icon-container">
            <span className="fa fa-building-o listitem-icon" />
        </div>
        <p className="listitem-text">{props.name}</p>
        <Score score={props.score} />
    </div>