import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./home";

const WebsiteApp: preact.FunctionalComponent = () => {
    useEffect(() => {
        const listener = () => {
            location.href = "/client";
        }

        window.addEventListener("appinstalled", listener);
        return () => { window.removeEventListener("appinstalled", listener); }
    }, []);

    return (
        <Switch>
            <Route path="/" exact={true}><Home /></Route>
        </Switch>
    );
}

export default WebsiteApp;
