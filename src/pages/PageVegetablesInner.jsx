import { useParams } from 'react-router-dom';
import { dataObj } from '../data/data';
import { PageNotFound } from './PageNotFound';





export function PageVegetablesInner() {
    
    let vegetablesPageObj = null;
    const data = useParams();
    const dataParts = [];

    const title = dataParts[0];
    const price = dataParts[1];
    const unit = dataParts[2];

    for (const item of dataObj) {
        if (item.id === data.id) {
           dataParts.push(item.name, item.price, item.unit);
           vegetablesPageObj = item;
        }
    }

    if (vegetablesPageObj === null) {
        return (
            <>
            { PageNotFound() }
            </>
        )
    }

    return (
        <>
            <h1>Apie produkta: { title }, 1{ unit }</h1>
            <h2>Kaina: { price }$</h2>
            <p>Dominancio produkto pavadinimas yra: { title }</p>
        </>
    );
}