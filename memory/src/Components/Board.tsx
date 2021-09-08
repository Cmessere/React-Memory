import React from "react";
import { BoardProps, Contributor } from "../Services/Types";
import "../Styles/Board.css"
import "../Styles/Card.css"

import { shuffle } from "../Utility/UtilityFunctions";
import { Card } from "./Card";
import { GameCompletedDialog } from "./GameCompletedDialog";
import { GameOverDialog } from "./GameOverDialog";

const Board = ({contributors}:BoardProps) => {
  const [avatars, setAvatars] = React.useState([] as any)
  const [turnedCards, setTurnedCards] = React.useState([] as any);
  const [foundCards, setFound] = React.useState([] as any);

  const [gameCompletedModal, setGameCompletedModal] = React.useState(false);
  const [gameOverModal, setGameOverModal] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [timer, setTimer] = React.useState(60);

  const uniqueCards:number = 6;

  React.useEffect(() =>{
    getMemoryImages()
  },[contributors])
  
  React.useEffect(() => {
    if(turnedCards.length === 2){
      if(avatars[turnedCards[0]] === avatars[turnedCards[1]]){
        setFound((alreadyFound:any) => ([...alreadyFound, avatars[turnedCards[0]]]))
        setScore((currentScore:number) => currentScore + 100)
      }
      else{
        setTimeout(() => setTurnedCards([]), 500)
      }
    }
  },[turnedCards, avatars])

  React.useEffect(() =>{
    if(foundCards.length === uniqueCards){
      setGameCompletedModal(true)
    }
  },[foundCards])

  React.useEffect(() => {
    const interval = setInterval(() => {
      if(timer > 0 && !gameCompletedModal)
        setTimer(timer - 1)
      else{
        if(!gameCompletedModal)
          setGameOverModal(true)
      }
    }, 1000);
      return () => clearInterval(interval);
  }, [timer, gameCompletedModal]);

  const handleRestart = () => {
    setAvatars(getMemoryImages);
    setFound([])
    setTurnedCards([])
    setGameCompletedModal(false);
    setGameOverModal(false);
    setTimer(60)
    setScore(0)
  };

  const getMemoryImages = () =>{
    let randomArray:Contributor[] = [];
    let alreadyPicked:number[] = []

    while(randomArray.length < uniqueCards){
        let random:any = Math.floor(Math.random() * 24) + 1;
        if(randomArray.indexOf(random) === -1 && !alreadyPicked.includes(random)){
          randomArray.push(contributors[random]);
        }
        alreadyPicked.push(random)
    }
      let memoryCards:Contributor[] = [...randomArray, ...randomArray]
      shuffle(memoryCards)
      setAvatars([...memoryCards])
      return memoryCards
  }

  const checkIfCardIsTurned = (index:number) => {
    return turnedCards.includes(index)
  }

  const checkIfCardIsFound = (url:string) => {
    return foundCards.includes(url)
  }

  const turnCard = (index:number) => {
    turnedCards.length === 1
     ? setTurnedCards((turned: any) => [...turned, index])
     : setTurnedCards([index])
  };

  return (
    <div className="board-div" id="board">
      <div className="internal-board-div" id="internal-board">
        <div className="wrapper">
          {avatars.map((x:string, index:number )=> 
            <div className="card-div" key={index}>
              <Card 
                imageUrl={x}
                index={index}
                isTurned={checkIfCardIsTurned(index)}
                isFound={checkIfCardIsFound(x)}
                turnCard={turnCard}
                />
            </div>)}
            <div className="Footer">
              <p className="Timer">Time: {timer} seconds</p>
              <p className="Score">Score: {score}</p>
            </div>
            <GameCompletedDialog handleRestart={handleRestart} isOpen={gameCompletedModal} score={score}/>
            <GameOverDialog handleRestart={handleRestart} isOpen={gameOverModal} score={score}/>
        </div>
      </div>
      
    </div>
  );
};

export default Board;