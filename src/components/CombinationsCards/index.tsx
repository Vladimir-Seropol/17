import style from './style.module.css';
import { FC, useEffect, useState } from 'react';
import { Combination } from '../../types/combination';
import CombinationsCard from '../CombinationsCard';




type Props = {
    filterValue: string
}


const CombinationsCards: FC<Props> = ({ filterValue }) => {

    const [initiRecipies, setinitiRecipies] = useState<null | Combination[]>(null);

    const [updateRecipies, setUpdateRecipies] = useState<null | Combination[]>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        try {
            setIsError(false);
            setIsLoading(true);

            const req = await fetch(' https://jellybellywikiapi.onrender.com/api/Combinations?pageIndex=1&pageSize=100');
            const data = await req.json();
            setIsLoading(false);
            setinitiRecipies(data.items);
            setUpdateRecipies(data.items);


        } catch (e) {
            console.log('ERROR->', e);
            setIsLoading(false);
            setIsError(true);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (filterValue) {
            const newArray = initiRecipies?.filter((item) => item.name.includes(filterValue))
            newArray && setUpdateRecipies(newArray)
        } else {
            setUpdateRecipies(initiRecipies);
        };
    }, [filterValue]);

    return (
        <>
            <div className={style.container}>

                {isLoading && <p>...loading</p>}
                {isError && <p>server is dead</p>}

                {updateRecipies && updateRecipies.map((combination) => {

                    return <CombinationsCard data={combination} key={combination.combinationId} />

                })}

            </div>
        </>

    );
}


export default CombinationsCards;