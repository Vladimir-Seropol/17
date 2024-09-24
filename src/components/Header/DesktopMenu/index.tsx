import { Link } from "react-router-dom";
import SwitchThem from "../../SwitchTheme"

export const DesktopMenu = () => {
  return (
    <>
       <SwitchThem />
    <nav>
       
    <Link to={"/beans"}>Beans</Link>
				<Link to={"/facts"}>Facts</Link>
				<Link to={"/recipies"}>Recipies</Link>
				<Link to={"/combinations"}>Combinations</Link>
				<Link to={"/history"}>History</Link>
    </nav>
    </>
  
  );
};