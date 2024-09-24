import style from './style.module.css';
import { FC, useEffect, useState } from 'react';
import { Fact } from '../../types/fact';
import FactCard from '../FactCard';


type Props = {
    filterValue: string
}


const FactCards: FC<Props> = ({ filterValue }) => {

    const [initiFacts, setinitiFacts] = useState<null | Fact[]>(null);

    const [updateFacts, setUpdateFacts] = useState<null | Fact[]>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        try {
            setIsError(false);
            setIsLoading(true);

            const req = await fetch('https://jellybellywikiapi.onrender.com/api/Facts?pageIndex=1&pageSize=100');
            const data = await req.json();
            setIsLoading(false);
            setinitiFacts(data.items);
            setUpdateFacts(data.items);


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
            const newArray = initiFacts?.filter((item) => item.title.includes(filterValue))
            newArray && setUpdateFacts(newArray)
        } else {
            setUpdateFacts(initiFacts);
        };
    }, [filterValue]);

    return (
 <>
        <div className={style.container}>
           
                {isLoading && <p>...loading</p>}
                {isError && <p>server is dead</p>}
                
                {updateFacts && updateFacts.map((fact) => {

                    return <FactCard data={fact} key={fact.factId} />
                    
                })}
            </div>
        </>
    );
}


export default FactCards;