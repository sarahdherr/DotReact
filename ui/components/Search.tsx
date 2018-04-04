import * as React from "react";

interface SearchProps { 
    handleSearch : (evt : any) => void, 
    handleExit : () => void, 
    searchTerm : string }

export const Search = (props : SearchProps) =>
    <div className="search">
        <span className="fa fa-search search-icon" />
        <input className="search-box" placeholder="Search" onChange={(e) => props.handleSearch(e)} value={props.searchTerm} />
        <span className="fa fa-times search-exit" onClick={(e) => props.handleExit()} />
    </div>