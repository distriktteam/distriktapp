import { Fragment, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as style from "./style.css";

import { DateSortedGrades } from '../../../components/client/Grades';
import UpcomingClass from '../../../components/client/UpcomingClass';
import Warning from '../../../components/client/Warning';

interface Props {}
const Home: preact.FunctionalComponent<Props> = props => {
    return (
        <div class={style.home}>
            <div class={style.dashboard}>
                <Header />
                <Warning />
                <DateSortedGrades onlyNew={true} />
                <DateSortedGrades onlyNew={true} />
                <DateSortedGrades onlyNew={true} />
                <DateSortedGrades onlyNew={true} />
                <DateSortedGrades onlyNew={true} />
                <DateSortedGrades onlyNew={true} />
                <DateSortedGrades onlyNew={true} />
            </div>
            <UpcomingClass />
        </div>
    );
};

const months = "ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split("_");
const Header: preact.FunctionalComponent<{}> = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            const newTime = new Date();
            if (time.getMinutes() !== newTime.getMinutes())
                setTime(newTime);
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

    const displayTime = `${time.getHours()}:${time.getMinutes() >= 10 ? time.getMinutes() : "0" + time.getMinutes()}`
        + `, ${time.getDate()}. ${months[time.getMonth()]}`

    // Zatím jenom čísla, pak pomocí moment.js bude i jméno měsíce
    return (
        <Fragment>
            <h1>{greeting}, uživateli</h1>
            <p>Je {displayTime}.</p>
        </Fragment>
    );
}

export default Home;