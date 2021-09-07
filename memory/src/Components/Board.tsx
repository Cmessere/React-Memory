import React from "react";
import "../Styles/Board.css"
import "../Styles/Card.css"

import { shuffle } from "../Utility/UtilityFunctions";

const Board = ({contributors}:any) => {
  const [avatars, setAvatars] = React.useState([] as any)
  const [turnedCards, setTurnedCards] = React.useState([] as any);

  const uniqueCards:number = 6;

  React.useEffect(() =>{
    const randomArray = getMemoryImages()
    duplicateAndShuffle(randomArray)
  },[contributors])

  const getMemoryImages = () =>{
    let randomArray = [];
    while(randomArray.length < uniqueCards){
        let random = Math.floor(Math.random() * 24) + 1;
        if(randomArray.indexOf(random) === -1) randomArray.push(contributors[random]);
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

  const turnCard = (index:number) => {
    if(turnedCards.length === 1){
      setTurnedCards((turned: any) => [...turned, index])
    }
    else{
      setTurnedCards([index])
    }
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
                turnCard={turnCard}
                />
            </div>)}
        </div>
      </div>
    </div>
  );
};

const Card = ({imageUrl, isTurned, turnCard, index}:any) => {
  const cardClicked = () => {
    !isTurned && turnCard(index)
  }
  if(isTurned)
  return(
    <div className="card" >
      <img 
        className="memory-image"
        alt=""
        src={imageUrl}
      />
    </div>
  )
  else{
    return(
      <div className="card" onClick={cardClicked}>
        <div className="empty-card">
        </div>
      </div>
    )
  }
}

export default Board;