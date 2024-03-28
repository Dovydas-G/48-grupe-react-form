/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
// import { dataObj } from '../data/data';
import { PageNotFound } from './PageNotFound';
import { useState, useEffect } from 'react';




export function PageVegetablesInner(  ) {


    const dataURL = 'https://raw.githubusercontent.com/Dovydas-G/48-grupe-react-form/main/public/vegetablesShopData.json';
    
    const [vegetablesData, setVegetablesData] = useState([]);
    
    useEffect(() => {
        fetch(dataURL)
          .then(res => res.json())
          .then(data => setVegetablesData(data.vegetablesShopData))
          .catch(e => console.error(e))
      }, []);

    
    let vegetablesPageObj = null;
    const data = useParams();
    const dataParts = [];

    
    for (const item of vegetablesData) {
        if (item.id === data.id) {
            dataParts.push(item.name, item.price, item.unit);
            vegetablesPageObj = item;
        }
    }

    const title = dataParts[0];
    const price = dataParts[1];
    const unit = dataParts[2];
    
    if (vegetablesPageObj === null) {
        return (
            <>
            { PageNotFound() }
            </>
        );
    }

    return (
        <>
            <h1>Apie produkta: { title }, 1{ unit }</h1>
            <h2>Kaina: { price }$</h2>
            <p>Dominancio produkto pavadinimas yra: { title }</p>
        </>
    );
}