import { Link } from 'react-router-dom';
import style from './style.module.css'
import SwitchThem from '../SwitchTheme';
const Nav = () =>{
	return(
		<nav className={style.container}>
			<SwitchThem />
				<Link to={"/beans"}>Beans</Link>
				<Link to={"/facts"}>Facts</Link>
				<Link to={"/recipies"}>Recipies</Link>
				<Link to={"/combinations"}>Combinations</Link>
				<Link to={"/history"}>History</Link>
				
				{/*<Modal isModal = {isModal} onClick = {() => setIsModal(false)} />*/}
		</nav>
	);
}

export default Nav;