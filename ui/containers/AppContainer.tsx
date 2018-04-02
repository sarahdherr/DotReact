import * as React from "react";
import { NavButtons } from "../components/NavButtons";
import { ListContainer } from "./ListContainer";

interface AppProps {}
interface AppState { showCompany : boolean }

export class AppContainer extends React.Component<AppProps, AppState> {
    constructor(props : AppProps) {
        super(props);
        this.state = {
            showCompany: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e : any, showCompany : boolean) : void {
        e.preventDefault();
        this.setState({ showCompany });
    }

    render() {
        return (
            <div className="app-container">
                <ListContainer showCompany={this.state.showCompany} />
                <NavButtons handleClick={this.handleClick}/>
            </div>
        );
    }
}