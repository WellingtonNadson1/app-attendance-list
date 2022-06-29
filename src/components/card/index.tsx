import './styles.css'

interface data {
    name: string;
    date: string;
}

export function Card(props: data) {

    return (
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.date}</small>
        </div>
    )
}