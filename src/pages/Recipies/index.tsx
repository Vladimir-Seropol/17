import RecipiesCards from "../../components/RecipiesCards";
import { useState } from "react";
import style from "./style.module.css"

//import style from "./style.module.css";

const Recipies = () => {
	  const [filterValue] = useState("");
	return(
		<>
        <h1 className={style.h1}>Recipies</h1>
		<RecipiesCards filterValue={filterValue}/>
		
		</>

	)
}

export default Recipies;






