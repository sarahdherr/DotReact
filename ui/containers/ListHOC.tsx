import * as React from "react";
import axios from "axios";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { BASE_URL } from "../helpers/utils";
var Infinite = require('react-infinite');

export default function ListHOC(header : string, Component : any, apiCall : string, func : (item : object) => object) : React.ComponentClass {
    interface ListProps {}
    interface ListState { searchTerm : string, items : Array<object> }

    return class List extends React.Component<ListProps, ListState> {
        constructor(props : ListProps) {
            super(props);
            this.state = {
                searchTerm : "",
                items : []
            };
            this.handleSearch = this.handleSearch.bind(this);
            this.handleExit = this.handleExit.bind(this);
        }

        componentDidMount() : void {
            axios.get(`${BASE_URL}/${apiCall}`)
                .then((response : {data : any}) => response.data[header.toLowerCase()])
                .then((items : Array<object>) => func(items))
                .then((items : Array<object>) => items.slice().sort((a : {score : number}, b  : {score : number}) => b.score - a.score))
                .then((items : Array<object>) => this.setState({ items }))
                .catch((err : Error) => console.error(err));
        }

        handleSearch(evt : any) : void {
            evt.preventDefault();
            this.setState({ searchTerm : evt.target.value });
        }

        handleExit() : void {
            this.setState({ searchTerm: "" });
        }

        render() : any {
            return (
                <div className="list-container">
                     <Header name={header} />
                     <Search handleSearch={this.handleSearch} handleExit={this.handleExit} searchTerm={this.state.searchTerm} />
                     <div className="contactslist">
                         <Infinite containerHeight={674} elementHeight={50}>
                             <Component items={this.state.items} searchTerm={this.state.searchTerm} />
                         </Infinite>
                     </div>
                 </div>
            )
        }
    }
}