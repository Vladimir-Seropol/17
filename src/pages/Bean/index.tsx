import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bean } from "../../types/bean";
import style from "./style.module.css";
const BeanPage = () => {

    const params = useParams();
    const [beanData, setBeanData] = useState<Bean | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {

                const req = await fetch(`https://jellybellywikiapi.onrender.com/api/Beans/${params.id}`
                );
                const data = await req.json();
                setBeanData(data);

            } catch (e) {
                console.log('ERROR->', e);
            }
        }
        getData();
    }, []);

    return (
        <div>

            {beanData &&
                <div className={style.item_wrapper} style={{ backgroundColor: beanData.backgroundColor }}>
                    <div>
                        <img src={beanData.imageUrl} alt="" />
                    </div>
                    <div className={style.info}>
                        <h2>{beanData.flavorName}</h2>
                        <p>{beanData.description}</p>
                        <p>{beanData.groupName}</p>
                        <p>{beanData.ingredients}</p>
                    </div>
                </div>}
        </div>
    )
}

export default BeanPage;