import style from './style.module.css';
import Card from '../Card';
import { FC, useEffect, useState } from 'react';
import { Bean } from '../../types/bean';

type Props = {
	filterValue : string
}


const Cards: FC<Props> = ({filterValue}) => {

	const [initiBeans, setinitiBeans] = useState<null | Bean[]>(null);

	const[updateBeans, setUpdateBeans] = useState<null | Bean[]>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const getData = async () => {
		try{
			setIsError(false);
			setIsLoading(true);

			const req = await fetch('https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=100');
			const data = await req.json();
			setIsLoading(false);
			setinitiBeans(data.items);
			setUpdateBeans(data.items);
			

		} catch(e){
			console.log('ERROR->', e);
			setIsLoading(false);
			setIsError(true);
		}
	};
	
	useEffect(()=>{
		getData();
	}, []);

	useEffect(()=>{
		if(filterValue){
			const newArray = initiBeans?.filter((item) => item.flavorName.includes(filterValue))
		newArray &&	setUpdateBeans(newArray)
	} else {
		setUpdateBeans(initiBeans);
	};
	}, [filterValue]);
	
	return(
		<div className={style.container}>
			{isLoading && <p>...loading</p>}
			{isError && <p>server is dead</p>}
	{updateBeans && updateBeans.map((bean) => {
	
	return <Card data = {bean} key={bean.beanId} />
})}

		</div>
	);
}


export default Cards;