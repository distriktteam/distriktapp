import classnames from "classnames";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as style from "./styl.css";

const Home: preact.FunctionalComponent = () => {
    const [installEvent, setInstallEvent] = useState<any>(undefined);
    const install = () => { if (installEvent !== undefined) installEvent.prompt(); }
    useEffect(() => {
        const callback = (e: any) => {
            e.preventDefault();
            setInstallEvent(e);
        }

        window.addEventListener("beforeinstallprompt", callback);
        return () => window.removeEventListener("beforeinstallprompt", callback);
    }, []);

    const downloadNowClasses = classnames({
        [style.button]: true,
        [style.colored]: installEvent !== undefined,
        [style.disabled]: installEvent === undefined
    });
    return (
        <div class={style.container}>
            <main>
                <nav>
                    <div class={style.logo}>
                        <img src="/assets/logo.svg" height={38} draggable={false}/>
                    </div>
                    <div class={style.menu}>
                        <a href="https://github.com/distriktteam/distriktapp" alt="GitHub">
                            <img src="/assets/homepage/github.svg" width={32} height={32}/>
                        </a>
                    </div>
                </nav>
                <header>
                    <div class={style.infobox}>
                        <h1>Mějte školu <br />pod kontrolou.</h1>
                        <p>Nová aplikace pro systém Bakaláři je zde <br />(a je zcela open-source).</p>
                        <div class={style.buttons}>
                            { /* <a onClick={install} class={downloadNowClasses}>Stáhnout nyní</a> */ }
                            <a href="#" class={classnames(style.button, style.disabled)}>Již brzy</a>
                            <span class={style.button}>
                                <a href="/client">Přihlásit se přes web</a>
                            </span>
                        </div>
                    </div>
                    <div class={style.sideimage} style={{ "backgroundImage": "url(\"/assets/homepage/screenshots-light.svg\")"}} />
                </header>
                <div class={style.afterheaderpadding} />
                <section>
                    <div class={style.text}>
                        <h1>
                            Známky, rozvrh. <br/>Vše na jeden pohled.
                        </h1>
                        <p>
                            Mějte vaše známky pod kontrolou, i když zrovna nejste online.
                            <br/>Rozvrh na příští dva týdny i příští hodina se ukládá a ukazuje offline.
                        </p>
                    </div>
                </section>
                <section>
                    <div class={style.text}>
                        <h1>
                            Od studentů, <br />pro studenty
                        </h1>
                        <p>
                            Víme, jak je otravné čekat na novou a lepší aplikaci Bakaláři,
                            <br />tak jsme vzali práci do vlastních rukou
                        </p>
                    </div>
                </section>
                <section>
                    <div class={style.text}>
                        <h1>
                            Distrikt je váš.
                        </h1>
                        <p>
                        Komunita je nejdůležitější částí vývoje,
                        <br/>takže jestli máte nějaký návrh nebo nápad,
                        <br/>stačí nám dát vědět! Jsme na Discordu.
                        </p>
                    </div>
                </section>
                <footer>
                    <img src=""/>
                    <div class={style.links}>
                        <div class={style.linkbox}>
                            <h5>Aplikace</h5>
                            <ul>
                                <li>Webová aplikace</li>
                            </ul>
                        </div>
                        <div class={style.linkbox}>
                            <h5>GitHub</h5>
                            <ul>
                                <li>Zdrojový kód</li>
                                <li>Licence</li>
                            </ul>
                        </div>
                        <div class={style.linkbox}>
                            <h5>Kontakty</h5>
                            <ul>
                                <li>Zdrojový kód</li>
                                <li>Discord</li>
                                <li>E-mail</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default Home;
