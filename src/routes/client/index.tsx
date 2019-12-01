import { h } from "preact";
import { Route, Switch } from "react-router-dom";

import Home from "./home";

import ProfileLogin from "./profile/login";
import ProfileSelect from "./profile/select";

const ClientApp: preact.FunctionalComponent = () => {
    return (
        <Switch>
            <Route path="/"><Home /></Route>
            <Route path="/profile/login"><ProfileLogin /></Route>
            <Route path="/profile/select"><ProfileSelect /></Route>
        </Switch>
    );
}

export default ClientApp;
