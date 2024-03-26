import { useParams } from 'react-router-dom';

export function PageVegetablesInner() {
    const data = useParams();

    return (
        <>
            <h1>Apie produkta: {data.id}</h1>
            <p>Dominancio produkto pavadinimas yra: ____</p>
        </>
    );
}