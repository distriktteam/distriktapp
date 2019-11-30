import { h } from "preact";
import * as style from "./style.css";

interface Props {}
const Grades: preact.FunctionalComponent<Props> = props => {
    return (
        <div style={style.grades} />
    );
};

export default Grades;