import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
// we cannot import react-platform index since Router file must be 
// used by sitemap gen (maybe we need another approach)
import { sEvtMgr, Events } from "@hw-core/react-platform/src/platform/EventManager"

/**
 * This function is used by our sitemap generator
 * DO NOT REMOVE this method, just change routes to your needs
 * if you want to exclude some routes from sitemap just
 * add them directly inside the <Router>
 */
export const routePaths = () => {
    var routes = []

    sEvtMgr.emit(Events.route_load_static, routes)

    return (
        <Switch>
            {routes}
        </Switch>
    )
}

export default (props) => {
    var routes = []

    sEvtMgr.emit(Events.route_load, routes);

    return (
        <Router basename={props.conf.basePath}>
            <div>
                {props.children}
                {routePaths()}
                <Switch>
                    {routes}
                </Switch>
            </div>
        </Router >)
};
