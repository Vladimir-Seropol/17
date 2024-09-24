import { useState } from "react";
import Cards from "../../components/Cards";
import Search from "../../components/Search";
import style from "./style.module.css";



const Beans = () => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <div className="container">
      <div className={style.DisplayBean}>
        <h1>Explore All Beans ...</h1>
        <Search setFilterValue={setFilterValue} />
        <Cards filterValue={filterValue} />
      </div>
    </div>
  );
};

export default Beans;
