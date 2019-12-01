import { h } from "preact";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ClientApp from "../routes/client";
import WebsiteApp from "../routes/website";

if ((module as any).hot)
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");

const App: preact.FunctionalComponent = () => {
    return (
        <div id="app">
            <BrowserRouter>
                <Switch>
                    <Route path="/client"><ClientApp /></Route>
                    <Route path="/"><WebsiteApp /></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
