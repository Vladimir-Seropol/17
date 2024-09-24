import { FC } from "react";
import style from "./style.module.css";
import { Bean } from "../../types/bean";
import { Link } from "react-router-dom";

//type Props = {
//title: string;
//image : string;
//}

// или так

//interface Props {
//	title: string;
//	image : string;
//}

type Props = {
  data: Bean;
};

const Card: FC<Props> = ({ data }) => {
  return (
    <Link to={`/bean/${data.beanId}`} className={style.card}
	  style={{ backgroundColor: data.backgroundColor }}>
        <h2>{data.flavorName}</h2>
        <img src={data.imageUrl} alt="" />
        <p>{data.description}</p>
        {data.sugarFree === true ? <p>Not sugar</p> : <p>Wit sugar </p>}
        {data.glutenFree === true ? <p>Wit gluten</p> : <p>Not gluten</p>}
    </Link>
  );
};

export default Card;
