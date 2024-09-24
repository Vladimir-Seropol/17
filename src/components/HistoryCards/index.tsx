import style from './style.module.css';
import { FC, useEffect, useState } from 'react';
import { History } from '../../types/history';
import HistoryCard from '../HistoryCard';


type Props = {
    filterValue: string
}


const HistoryCards: FC<Props> = ({ filterValue }) => {

    const [initiHistory, setinitiHistory] = useState<null | History[]>(null);

    const [updateHistory, setUpdateHistory] = useState<null | History[]>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        try {
            setIsError(false);
            setIsLoading(true);

            const req = await fetch(' https://jellybellywikiapi.onrender.com/api/mileStones?pageIndex=1&pageSize=100');
            const data = await req.json();
            setIsLoading(false);
            setinitiHistory(data.items);
            setUpdateHistory(data.items);


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
            const newArray = initiHistory?.filter((item) => item.description.includes(filterValue))
            newArray && setUpdateHistory(newArray)
        } else {
            setUpdateHistory(initiHistory);
        };
    }, [filterValue]);

    return (
        <>
            <div className={style.container}>

                {isLoading && <p>...loading</p>}
                {isError && <p>server is dead</p>}

                {updateHistory && updateHistory.map((history) => {

                    return <HistoryCard data={history} key={history.mileStoneId} />

                })}
            </div>
        </>
    );
}


export default HistoryCards;