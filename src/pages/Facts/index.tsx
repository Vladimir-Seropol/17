



import { useState } from "react";
import FactCards from "../../components/FactCards";
import style from "./style.module.css";



const Facts = () => {
  const [filterValue] = useState("");
  return (
     <>
     <div className={style.container_fact}>
        
        <h1>Facts ...</h1>
        <FactCards filterValue={filterValue}/>
      </div>
    </>
  );
};

export default Facts;