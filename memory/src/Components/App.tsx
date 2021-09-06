import React from "react";
import { getContributors } from "../Services/ApiClient";
import "../Styles/App.css"
import Board from "./Board";
import Header from './Header';

const App = () => {
  const [contributors, setContributors] = React.useState([])
  const [error, setError] = React.useState(undefined as any)

  React.useEffect(() =>{
    getContributors()
      .then((response:any)=>{
          setContributors(response.data.slice(0, 25).map((x:any)=> x.avatar_url))
      })
      .catch((error) =>{
        setError(error)
      })
  },[])
  
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
  if(contributors)
  return (
    <div className="App">
      <Header />
      <Board contributors={contributors}/>
    </div>
  );
  else
    return(
      <div>Loading...</div>
    )
}

export default App;
