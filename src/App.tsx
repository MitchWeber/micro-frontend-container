import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MicroFrontend from "./MicroFrontend";
import AppHeader from "./AppHeader";

function App() {

    const ReactService = () => <MicroFrontend name="ReactService" host={process.env.REACT_APP_REACT_SERVICE_HOST!}/>; //TODO: ! should not be needed

    const VueJsService = () => <MicroFrontend name="VueJsService" host={process.env.REACT_APP_VUEJS_SERVICE_HOST!}/>; //TODO: ! should not be needed

    const Home = () => <p>Home</p>;

    return (
        <BrowserRouter>
            <React.Fragment>
                <AppHeader />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/reactservice" component={ReactService}/>
                    <Route exact path="/vuejsservice" component={VueJsService}/>
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
