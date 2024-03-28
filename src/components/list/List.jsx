
import style from './List.module.css';
import { VegyItem } from './VegyItem';
// import { dataObj } from '../../data/data';
import { useEffect, useState } from 'react';








export function List( ) {
    
    const dataURL = 'https://raw.githubusercontent.com/Dovydas-G/48-grupe-react-form/main/public/vegetablesShopData.json';
    
    const [vegetablesData, setVegetablesData] = useState([]);
    
    useEffect(() => {
        fetch(dataURL)
          .then(res => res.json())
          .then(data => setVegetablesData(data))
          .catch(e => console.error(e))
      }, []);

      const vegetablesObj = [];
     
      for (const key in vegetablesData) {
        for (const item of vegetablesData[key])
            vegetablesObj.push(item);
      }

    
    return (
    <>
        <ul className={style.vegetables}>
            {/* {data.map((vegy, index) => <li key={index} className={style.vegy}>{vegy}</li>)} */}
            {vegetablesObj.map((vegy, index) => <VegyItem  key={index} vegetablesObj={vegy}/>)}
        </ul>
    </>
    );
}





