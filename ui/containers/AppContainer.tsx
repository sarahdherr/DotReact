import * as React from "react";
import { NavButtons } from "../components/NavButtons";
import { ListContainer } from "./ListContainer";
import { ListType } from "./enums/listTypes";

interface AppProps {}
interface AppState { listType : ListType }

class AppContainer extends React.Component<AppProps, AppState> {
    constructor(props : AppProps) {
        super(props);
        this.state = {
            listType: ListType.Company
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e : any, listType : ListType) : void {
        e.preventDefault();
        this.setState({ listType });
    }

    render() {
        return (
            <div className="app-container">
                <ListContainer listType={this.state.listType} />
                <NavButtons handleClick={this.handleClick}/>
            </div>
        );
    }
}

export default AppContainer;