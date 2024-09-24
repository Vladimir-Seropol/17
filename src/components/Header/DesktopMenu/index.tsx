import { Link } from "react-router-dom";
import SwitchThem from "../../SwitchTheme"
import style from "./style.module.css"

export const DesktopMenu = () => {
    return (
        <>
            <SwitchThem />
            <nav>
                <Link className={style.link} to={"/beans"}>Beans</Link>
                <Link className={style.link} to={"/facts"}>Facts</Link>
                <Link className={style.link} to={"/recipies"}>Recipies</Link>
                <Link className={style.link} to={"/combinations"}>Combinations</Link>
                <Link className={style.link} to={"/history"}>History</Link>
            </nav>
        </>

    );
};