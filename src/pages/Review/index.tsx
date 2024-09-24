//import { FormEvent } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import style from './style.module.css';



//Для использования библиотеки
type FormType = {
	name: string;
	email: string;
	category: string;
}

const Review = () => {

// Используем библиотеку для обработки форм

	const {register, handleSubmit, formState: {errors}} = useForm<FormType>();


console.log(errors);

	//Не используем библиотеку

	//const handSubmit = (event: FormEvent<HTMLFormElement>) => {
	//	event.preventDefault();

	//	const form = new FormData(event.currentTarget);
	//	const data = Object.fromEntries(form);
	//	const postData = async() => {
	//		const req = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
	//			method: 'POST',
	//			body : JSON.stringify(data),
	//		});
	//		const answer = await req.json();
	//		console.log(answer);
	//	}
	//	postData();
	//	console.log(data);
	//};


	const onSubmit : SubmitHandler<FormType> = (data) => {
		console.log(data);
	}
	return(
// Используем библиотеку
<form onSubmit={handleSubmit(onSubmit)}>
		<div className={style.block_form}>
		<label htmlFor="user_name">Имя</label>
			<input id="user_name" type="text" {...register('name', {
				required: {
					value: true,
					message: 'Обязательное поле',
				},
				 minLength: {value: 3, message: 'Минимальная длина 3 символа',
				},
				})}/>
			{errors.name && <p>{errors.name.message}</p>}

			<label><input type="email" {...register('email')}/>Email</label>

			<select {...register('category')} >
				<option value="A">Select A</option>
				<option value="B">Select B</option>
				<option value="C">Select C</option>
			</select>
			<input type="submit" />
		
		</div>
		</form>




		//Не используем библиотеку
		//	<form onSubmit={handSubmit}>
		//<div className={style.block_form}>
		//<label htmlFor="user_name">Имя</label>
		//	<input id="user_name" type="text" name="user_name" />
			

		//	<label><input type="email" name="user_email"/>Email</label>

		//	<input type="submit" />
		
		//</div>
		//</form>
	)
}

export default Review;