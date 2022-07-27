import './styles.css'
import { useEffect, useState } from 'react'
import { Card, dataCard } from '../../components/card'

export function Home() {

   const [participanteName, setParticipanteName] = useState('');
   const [participantes, setParticipantes] = useState<dataCard[]>([]);
   const [user, setUser] = useState({name: '', avatar_url: ''})


   function handleAddParticipante() {
    const newParticipante = {
        name: participanteName,
        time: new Date().toLocaleTimeString("pt-br", {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })
    }
    setParticipantes(prevState => [...prevState, newParticipante])
   }
//    useEffect é exwcutado apenas uma única vez quando 
//    a página for carregada se o array de dependências estiver vazio.
 useEffect(() =>{
    fetch('https://api.github.com/users/WellingtonNadson1')
    .then(response => response.json())
    .then(result => setUser(result))
   }, [])
console.log(user)
    return (
        <>
            <div className='container'>
                <header>
                    <h1>Lista de Presença</h1>
                    <div>
                        <strong>{user.name}</strong>
                        <img src={user.avatar_url} alt="Foto do Perfil" />
                    </div>
                </header>
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
                participantes.map(participante => 

                    <Card name={participante.name} time={participante.time} key={participante.time} />

                )
            }
            
            </div>
        </>
    )
}