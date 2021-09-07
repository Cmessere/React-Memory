import React from "react";
import "../Styles/Board.css"
import "../Styles/Card.css"

import { shuffle } from "../Utility/UtilityFunctions";
import { Card } from "./Card";
import { GameCompletedDialog } from "./GameCompletedDialog";

const Board = ({contributors}:any) => {
  const [avatars, setAvatars] = React.useState([] as any)
  const [turnedCards, setTurnedCards] = React.useState([] as any);
  const [foundCards, setFound] = React.useState([] as any);
  const [gameCompletedModal, setGameCompletedModal] = React.useState(false);


  const uniqueCards:number = 6;

  React.useEffect(() =>{
    const randomArray = getMemoryImages()
    duplicateAndShuffle(randomArray)
  },[contributors])
  
  React.useEffect(() => {
    if(turnedCards.length === 2){
      if(avatars[turnedCards[0]] === avatars[turnedCards[1]]){
        setFound((alreadyFound:any) => ([...alreadyFound, avatars[turnedCards[0]]]))
      }
    }
  },[turnedCards])

  React.useEffect(() =>{
    if(foundCards.length === uniqueCards){
      setGameCompletedModal(true)
    }
  },[foundCards])

  const handleRestart = () => {
    setGameCompletedModal(false);
    setTurnedCards([])
    setFound([])
  };

  const getMemoryImages = () =>{
    let randomArray:string[] = [];
    let alreadyPicked:number[] = []
    
    while(randomArray.length < uniqueCards){
        let random:any = Math.floor(Math.random() * 24) + 1;
        if(randomArray.indexOf(random) === -1 && !alreadyPicked.includes(random)){
          randomArray.push(contributors[random]);
        }
        alreadyPicked.push(random)
    }
    return randomArray
  }

  const duplicateAndShuffle = (randomArray:string[]) => {
    let memoryCards:string[] = [...randomArray, ...randomArray]
    shuffle(memoryCards)
    setAvatars([...memoryCards])
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
            <GameCompletedDialog handleRestart={handleRestart} isOpen={gameCompletedModal} />
        </div>
      </div>
    </div>
  );
};

export default Board;