import { h } from "preact";
import * as style from "./style.css";

interface Props {}
const Schedule: preact.FunctionalComponent<Props> = props => {
    return (
        <div class={style.schedule} />
    );
};

export default Schedule;