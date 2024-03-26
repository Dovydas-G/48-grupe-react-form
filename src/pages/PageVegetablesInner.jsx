import { useParams } from 'react-router-dom';
import { dataObj } from '../data/data';
import { PageNotFound } from './PageNotFound';

export function PageVegetablesInner(  ) {
    
    let vegetablesObj = null;

    const data = useParams();
    
    const dataParts = [];

    for (const item of dataObj) {
        if (item.id === data.id) {
           dataParts.push(item.name, item.price, item.unit);
           vegetablesObj = item;
        }
    }


    if (vegetablesObj === null) {
        return (
            <>
            { PageNotFound() }
            </>
        )
        
    }

    const title = dataParts[0];
    const price = dataParts[1];
    const unit = dataParts[2];



    return (
        <>
            <h1>Apie produkta: { title }, 1{ unit }</h1>
            <h2>Kaina: { price.toFixed(2) }$</h2>
            <p>Dominancio produkto pavadinimas yra: { title }</p>
        </>
    );
}