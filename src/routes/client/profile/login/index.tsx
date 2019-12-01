import { h } from "preact";
import * as style from "./style.css";

const ProfileLogin: preact.FunctionalComponent = () => {
    return (
        <div class={style.login}>
            <div class={style.loginBox}>
                <form autocomplete="on">
                    <img width={250} src="/assets/logo.svg" /><br /><br />
                    <span>Přihlašte se pomocí účtu Bakaláři</span>
                    <input type="username" placeholder="Přihlašovací jméno" />
                    <input type="password" placeholder="Heslo" />
                    <input type="url" placeholder="Adresa školy" />
                    <input type="submit" value="Přihlásit se" />
                </form>
            </div>
        </div>
    )
}

export default ProfileLogin;
