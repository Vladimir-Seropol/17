import CombinationsCards from "../../components/CombinationsCards";
import { useState } from "react";
import style from "./style.module.css"

//import style from "./style.module.css";

const Recipies = () => {
	  const [filterValue] = useState("");
	return(
		<>
        <h1 className={style.h1}>Combinations</h1>
		<CombinationsCards filterValue={filterValue}/>
		
		</>

	)
}

export default Recipies;






