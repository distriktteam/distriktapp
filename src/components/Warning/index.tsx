import { h } from "preact";
import * as style from "./style.css";

interface Props {}
const Warning: preact.FunctionalComponent<Props> = props => {
    return (
        <div class={style.warning}>
            <div class={style.container}>
                <div class={style.title}>
                    <h3>Pozor!</h3>
                </div>
                <div class={style.description}>
                <p>Máš nevyřízenou absenci dne 24. listopadu, 1. a 2. hodinu.</p>
                </div>
            </div>
            <div class={style.buttons}>
                <a class={style.button} href="#">Zkontrolovat</a>
                <a class={style.button} href="#">Již nezobrazovat</a>
            </div>
        </div>
    );
};

export default Warning;