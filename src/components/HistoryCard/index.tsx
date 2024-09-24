import { FC } from "react";
import style from "./style.module.css";
import { History } from "../../types/history";


type Props = {
    data: History;
};

const HistoryCard: FC<Props> = ({ data }) => {

    return (
        <>
            <div className={style.wrapper}>
                <h3> {data.year}</h3>
                <p className={style.description}>{data.description}</p>
            </div>
        </>
    );
};

export default HistoryCard;
