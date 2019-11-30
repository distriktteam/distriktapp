import { h } from "preact";
import * as style from "./style.css";

interface Props {}
const UpcomingClass: preact.FunctionalComponent<Props> = props => {
    return (
        <div class={style.upcoming}>
            <span class={style.time}>13:10 - 13:55</span>
            <span class={style.subject}>Matematika jojojo nevím co jsem dát možná elektroniku</span>
            <span class={style.room}>204</span>
        </div>
    );
};

export default UpcomingClass;