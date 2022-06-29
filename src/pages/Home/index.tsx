import { useState } from 'react'
import './styles.css'
import { Card } from '../../components/card'

export function Home() {

   const [participanteName, setParticipanteName] = useState('');
   const [participantes, setParticipantes] = useState([] as any);


   function handleAddParticipante() {
    const newParticipante = {
        name: participanteName,
    }
    setParticipantes([newParticipante])
   }

    return (
        <div className='container'>
            <h1>Lista de Presença</h1>
            <input 
                type="text" 
                name="" 
                id="" 
                placeholder="Digite seu nome..."
                onChange={e => setParticipanteName(e.target.value)}
            />

            <button 
                onClick={handleAddParticipante} 
                type="submit">
                    Adicionar
            </button>
        {
            participantes.map((p: { name: string; }) => {
                <Card name={p.name} date="29/06/2022" />

            })
        }

        </div>
    )
}