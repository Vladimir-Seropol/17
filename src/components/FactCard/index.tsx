import { FC } from "react";
import style from "./style.module.css";
import { Fact } from "../../types/fact";


type Props = {
    data: Fact;
};

const FactCard: FC<Props> = ({ data }) => {

    return (
        <>
            <div className={style.wrapper}>
                <h3>{data.factId} {data.title}</h3>
                <p>{data.description}</p>
            </div>
        </>
    );
};

export default FactCard;
