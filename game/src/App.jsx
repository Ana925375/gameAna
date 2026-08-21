import { useState } from 'react'
import GameCard from './components/gameCard'
import GameList from './components/gameList'



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Olá, Seja Bem-Vindo!</h1>

        <h2>Jogos Para se Divertir!</h2>
        <GameCard />
        <GameList />
      </div>

    </>
  )
}

export default App
