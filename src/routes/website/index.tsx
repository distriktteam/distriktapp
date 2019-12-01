import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./home";

const WebsiteApp: preact.FunctionalComponent = () => {
    const [redirecting, setRedirecting] = useState(false);
    useEffect(() => {
        const listener = () => {
            console.log("Yote");
            setRedirecting(true);
        }

        window.addEventListener("appinstalled", listener);
        return () => { window.removeEventListener("appinstalled", listener); }
    }, []);

    if (redirecting) return <Redirect to="/client" />;
    return (
        <Switch>
            <Route path="/" exact={true}><Home /></Route>
        </Switch>
    );
}

export default WebsiteApp;
