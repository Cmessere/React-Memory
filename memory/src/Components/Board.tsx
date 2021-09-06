import React from "react";
import "../Styles/Board.css"
import "../Styles/Card.css"

import { shuffle } from "../Utility/UtilityFunctions";

const Board = ({contributors}:any) => {
  const [avatars, setAvatars] = React.useState([] as any)
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
    console.log("memory", memoryCards)
  }

  console.log("avatars",avatars)
  console.log("contributors",contributors)

  return (
    <div className="board-div" id="board">
      <div className="internal-board-div" id="internal-board">
        <div className="wrapper">
          {avatars.map((x:string,i:number )=> <div className="card-div" key={i}><Card imageUrl={x}/></div>)}
        </div>
      </div>
    </div>
  );
};

const Card = ({imageUrl}:any) => {
  console.log("url", imageUrl)
  return(
    <div className="card">
      <img 
        className="memory-image"
        alt=""
        src={imageUrl}
      />
    </div>
  )
}

export default Board;