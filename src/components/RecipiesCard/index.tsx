import { FC } from "react";
import style from "./style.module.css";
import { Recipie } from "../../types/recipie";


type Props = {
    data: Recipie;
};

const RecipiesCard: FC<Props> = ({ data }) => {

    return (
        <>
            <div className={style.wrapper}>
                <img src={data.imageUrl} alt="" />
                <h3> {data.name}</h3>
                <p className={style.description}>
          {data.description.length > 100
            ? data.description.slice(0, 100) + "..."
            : data.description}
        </p>
        {data.makingAmount && (
          <p className={style.additional_info}> Make: {data.makingAmount}</p>
        )}
        {data.cookTime && (
          <p className={style.additional_info}>Cook Time: {data.cookTime}</p>
        )}
        {data.totalTime && (
          <p className={style.additional_info}>Total Time: {data.totalTime}</p>
        )}

            </div>

        </>


    );
};

export default RecipiesCard;
