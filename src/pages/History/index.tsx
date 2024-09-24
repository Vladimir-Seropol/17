import HistoryCards from "../../components/HistoryCards";
import { useState } from "react";
import style from "./style.module.css"



const History = () => {
	  const [filterValue] = useState("");
	
	return(
		<div className="container">
		<h1 className={style.h1}>History</h1>
        <HistoryCards filterValue={filterValue}/>
		</div>

	)
}

export default History;
