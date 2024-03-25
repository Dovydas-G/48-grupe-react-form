import style from './List.module.css';
import { VegyItem } from './VegyItem';


export function List() {
    
    const dataObj = [
        {
            name: 'Bulves',
            price: 1,
        },
        {
            name: 'Morkos',
            price: 3,
        },
        {
            name: 'Svogunai',
            price: 2,
        },
        {
            name: 'Kopustai',
            price: 4,
        },
        {
            name: 'Pomidorai',
            price: 3,
        },
        {
            name: 'Agurkai',
            price: 2,
        },
    ]


    return (
        <ul className={style.vegetables}>
            {/* {data.map((vegy, index) => <li key={index} className={style.vegy}>{vegy}</li>)} */}
            {dataObj.map((vegy, index) => <VegyItem key={index} title={vegy.name} price={vegy.price} total={vegy.price}/>)}
            
        </ul>
    )
}
