/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { List } from "../components/list/List";



export function PageVegetables() {

    const dataURL = 'https://raw.githubusercontent.com/Dovydas-G/48-grupe-react-form/main/public/vegetablesShopData.json';
    
    const [vegetablesData, setVegetablesData] = useState([]);
    
    useEffect(() => {
        fetch(dataURL)
          .then(res => res.json())
          .then(data => setVegetablesData(data.vegetablesShopData))
          .catch(e => console.error(e))
      }, []);

      
      console.log(vegetablesData)

    return (
        <>
            <List vegetablesData={vegetablesData}/>
        </>
    );
}