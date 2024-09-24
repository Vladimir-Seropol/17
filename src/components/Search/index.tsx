import { ChangeEvent, Dispatch, FC, useState } from 'react';
import style from './style.module.css'

type Props = {
	setFilterValue : Dispatch<React.SetStateAction<string>>
}


const Search: FC<Props> = ({setFilterValue}) => {

	const [inpuValue, setinputValue] = useState('');
	const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
		
		setinputValue(event.target.value);
	}

	const handleClick = () => {
		setFilterValue(inpuValue);
		
	}
	return(
		<div className={style.container}>
			<input value={inpuValue} type="text" onChange={(event) => handleChange(event)} />
			<button onClick={handleClick}>Найти</button>
			</div>
	);
};
	export default Search;