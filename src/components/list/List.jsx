
import style from './List.module.css';
import { VegyItem } from './VegyItem';
import { dataObj } from '../../data/data';


export function List() {
    
    
    return (
    <>
        <ul className={style.vegetables}>
            {/* {data.map((vegy, index) => <li key={index} className={style.vegy}>{vegy}</li>)} */}
            {dataObj.map((vegy, index) => <VegyItem key={index} dataObj={vegy}  />)}
            
        </ul>
    </>
    );
}
