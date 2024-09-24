import { FC } from "react";
import style from "./style.module.css";
import { Combination } from "../../types/combination";


type Props = {
    data: Combination;
};

const CombinationsCard: FC<Props> = ({ data }) => {

    return (
        <>
            <div className={style.wrapper}>
                <h3> {data.name}</h3>
                <p className={style.description}>{data.tag}</p>
            </div>
        </>
    );
};

export default CombinationsCard;
