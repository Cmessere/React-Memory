import React from "react";
import { getContributors } from "../Services/ApiClient";
import { Contributor } from "../Services/Types";
import "../Styles/App.css"
import Board from "./Board";
import Header from './Header';


const App = () => {
  const [contributors, setContributors] = React.useState([])
  const [error, setError] = React.useState(undefined as any)
  const [start, setStart] = React.useState(false)

  React.useEffect(() =>{
    getContributors()
      .then((response:any)=>{
          setContributors(response.data.slice(0, 25).map((x:Contributor)=> x.avatar_url))
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
  if(contributors && start)
  return (
    <div className="App">
      <Header />
      <Board contributors={contributors}/>
    </div>
  );
  else
    return(
      <div className="Intro-Div">
        <p className="Intro-Paragraph-desktop">Welcome To GitHub Memory.</p>
        <p className="Intro-Paragraph-mobile">GitHub Memory</p>
        <button className="Intro-button" onClick={() => setStart(true)}>PLAY!</button>
      </div>
    )
}

export default App;
