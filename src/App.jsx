/* eslint-disable no-unused-vars */
import React from "react"
import StartGame from "./components/StartGame.jsx"
import GamePlay from "./components/GamePlay.jsx";
import './App.css'

function App() {


  const [isGameStarted, setIsGameStarted] = React.useState(false);



  function toggleGamePlay() {
    setIsGameStarted(prevState => !prevState);
  }



  return (
    <>
    {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay}/>}
    
    </>
  )
}

export default App
