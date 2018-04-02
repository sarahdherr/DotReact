import * as React from "react";

interface SearchProps { handleSearch : (searchTerm : string) => void }
interface SearchState { value : string }

export class Search extends React.Component<SearchProps, SearchState> {
    constructor(props : SearchProps) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleExit = this.handleExit.bind(this);
    }

    handleChange(e : any) : void {
        e.preventDefault();
        this.setState(
            { value: e.target.value },
            () => this.props.handleSearch(this.state.value)
        );
    }

    handleExit(e : any) : void {
        e.preventDefault();
        this.setState(
            { value: "" },
            () => this.props.handleSearch(this.state.value)
        );
    }

    render() {
        return (
            <div className="search">
                <span className="fa fa-search search-icon" />
                <input className="search-box" placeholder="Search" onChange={this.handleChange} value={this.state.value} />
                <span className="fa fa-times search-exit" onClick={this.handleExit} />
            </div>
        )
    }
}
