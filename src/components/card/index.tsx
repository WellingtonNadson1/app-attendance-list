import './styles.css'

export type dataCard = {
    name: string;
    time: string;
}

export function Card({name, time}: dataCard) {
    // Posso desestruturar o props que seria colocado
    // no argumento da função colocando {}, desta forma 
    // já pego as propriedades de forma direta.

    return (
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}