import { Fragment, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as style from "./style.css";

import { DateSortedGrades } from '../../components/Grades';
import Warning from '../../components/Warning';

interface Props {}
const Home: preact.FunctionalComponent<Props> = props => {
    return (
        <div class={style.home}>
            <Header />
            <Warning />
            <DateSortedGrades onlyNew={true} />
        </div>
    );
};

const Header: preact.FunctionalComponent<{}> = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            const newTime = new Date();
            if (time.getMinutes() !== newTime.getMinutes()) {
                setTime(newTime);
            }
        }, 300);

        return () => {
            clearInterval(interval);
        }
    }, [time]);

    let greeting = "Dobré poledne"; // 12:00 - 12:59
    if (time.getHours() < 10) greeting = "Dobré ráno"; // 0:00 - 9:59
    else if (time.getHours() < 12) greeting = "Dobré dopoledne"; // 10:00 - 11:59
    else if (time.getHours() >= 17) greeting = "Dobrý večer"; // 17:00 - 23:59
    else if (time.getHours() >= 13) greeting = "Dobré odpoledne"; // 13:00 - 16:59

    // Zatím jenom čísla, pak pomocí moment.js bude i jméno měsíce
    return (
        <Fragment>
            <h1>{greeting}, uživateli</h1>
            <p>Je {time.getHours()}:{time.getMinutes()}, {time.getDate()}. {time.getMonth()}.</p>
        </Fragment>
    );
}

export default Home;