import moment from "moment";
import { h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";

import ProfileLogin from "../routes/profile/login";
import ProfileSelect from "../routes/profile/select";

if ((module as any).hot)
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");

const App: preact.FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div id="app">
            <Router onChange={handleRoute}>
                <Route path="/" component={Home} />

                <Route path="/profile/login" component={ProfileLogin} />
                <Route path="/profile/select" component={ProfileSelect} />
            </Router>
        </div>
    );
};

export default App;
