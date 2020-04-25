import * as React from "react";
import {NavLink} from "react-router-dom";
import './AppHeader.css';

const AppHeader = () => (
    <header>
        <div className="center-column">
            <h1>Micro Frontends</h1>
        </div>
        <nav>
            <ol className="center-column">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/reactservice">React Service</NavLink>
                </li>
                <li>
                    <NavLink to="/vuejsservice">VueJs Service</NavLink>
                </li>
            </ol>
        </nav>
    </header>
);

export default AppHeader;
