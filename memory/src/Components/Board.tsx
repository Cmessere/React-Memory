import React from "react";
import { getContributors } from "../Services/ApiClient";

const Board = () => {
  const [contributors, setContributors] = React.useState([])
  const [avatars, setAvatars] = React.useState([] as any)
  const [error, setError] = React.useState(undefined as any)

  const uniqueCards = 6;

  React.useEffect(() =>{
    getContributors()
      .then((response:any)=>{
          setContributors(response.data.slice(0, 25))
          console.log("response", response)
      })
      .catch((error) =>{
        setError(error)
      })

    getMemoryImages()
  },[])

  const getMemoryImages = () =>{
    let randomArray:number[] = [];
    while(randomArray.length < uniqueCards){
        const random = Math.floor(Math.random() * 24) + 1;
        if(randomArray.indexOf(random) === -1) randomArray.push(contributors[random]);
    }
    setAvatars(randomArray)
  }
  console.log("avatars", avatars)
  
  if(error)
  return(
    <div className="board-div" id="board">
      <div className="internal-board-div" id="internal-board">
        <div className="error-div">
          {error.message}
        </div>
      </div>
    </div>
  )
  return (
    <div className="board-div" id="board">
      <div className="internal-board-div" id="internal-board">
        
      </div>
    </div>
  );
};

export default Board;