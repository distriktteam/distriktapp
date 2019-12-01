import { h } from "preact";
import * as style from "./style.css";

interface Props {
    onlyNew?: boolean;
}

const Grades: preact.FunctionalComponent<Props> = props => {
    return (
        <div class={style.grades}>
        <h2>{props.onlyNew === true ? "Nové" : ""} Známky</h2>
            <div class={style.gradeBox}>
                <h1 class={style.grade}>
                    1
                </h1>
                <div class={style.details}>
                    <h2 class={style.subjectName}>
                        Elektronika
                        </h2>
                    <p class={style.info}>
                        Ohmův zákon
                        </p>
                </div>
            </div>
        </div>
    );
};

export default Grades;