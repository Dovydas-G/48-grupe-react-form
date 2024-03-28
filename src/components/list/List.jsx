/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import style from './List.module.css';
import { VegyItem } from './VegyItem';
// import { dataObj } from '../../data/data';




export function List( {vegetablesData} ) {
    
    

    
    return (
    <>
        <ul className={style.vegetables}>
            {/* {data.map((vegy, index) => <li key={index} className={style.vegy}>{vegy}</li>)} */}
            {vegetablesData.map((vegy, index) => <VegyItem  key={index} vegetablesData={vegy}/>)}
        </ul>
         
    </>
    );
}





