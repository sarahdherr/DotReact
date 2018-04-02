import * as React from "react";
import { Company } from "./company";
import { CompanyListItem } from "./CompanyListItem";
import { includes } from "../../helpers/utils";

interface CompanyListProps { items : Array<Company>, searchTerm : string };

export const CompanyList = (props: CompanyListProps) => {
    return (
        <div>
        {
            props.items
                .filter((company : Company) : boolean => includes(company.name, props.searchTerm))
                .map((company : Company) : object => 
                    <CompanyListItem 
                        key={company.id} 
                        id={company.id} 
                        name={company.name} 
                        score={company.score} />
                )
        }
        </div>
    )
}