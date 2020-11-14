import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "../App";
import About from "../about";

const rootRoute: React.FC = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    )
}

export default rootRoute;
