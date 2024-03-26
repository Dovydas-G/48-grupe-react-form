
import style from './List.module.css';
import { VegyItem } from './VegyItem';


export function List() {
    
    const dataObj = [
        {
            name: 'Bulvės',
            price: 1,
        },
        {
            name: 'Morkos',
            price: 3,
        },
        {
            name: 'Svogūnai',
            price: 2,
        },
        {
            name: 'Kopūstai',
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
    <>
        <ul className={style.vegetables}>
            {/* {data.map((vegy, index) => <li key={index} className={style.vegy}>{vegy}</li>)} */}
            {dataObj.map((vegy, index) => <VegyItem key={index} dataObj={vegy}  />)}
            
        </ul>
    </>
    );
}
