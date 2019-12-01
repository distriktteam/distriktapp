import { h } from "preact";
import * as style from "./styl.css";

const Home: preact.FunctionalComponent = () => {
    return (
        <div class={style.container}>
            <div class={style.menu}>
                <img src="/assets/logo.svg" width={150} />
            </div>
            <h1>Mějte školu <br />pod kontrolou.</h1>
            <p>Nová aplikace pro systém Bakaláři je zde <br />(a je zcela open-source).</p>
            <div class="buttons">
                <a href="#" class={style.buttonDownload}>Stáhnout nyní</a>
                <a href="#" class={style.buttonLogin}>Přihlásit se přes web</a>
            </div>
        </div>
    );
}

export default Home;
