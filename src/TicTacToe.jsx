import { useState } from "react";
import Header from "./Header";
import "./TicTacToe.css";
<script src="https://cdn.tailwindcss.com"></script>;

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true); // X plays first is true O plays second is false

  const handleClick = (index) => {

    if(board[index] || winner) return
      // // Update the board with the current player's symbol
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext) // toggle X or O
    console.log(isXNext)
    
  };

  // restart button
  const handleRestart = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    
  };


  const calculateWinner =(squares)=>{
   
  // check for rows 
  if(squares[0]&& squares[0]===squares[1]&&squares[0]===squares[2]){
    return squares[0]
  }
  if(squares[3]&& squares[3]===squares[4]&&squares[3]===squares[5]){
    return squares[3]
  }
  if(squares[6]&& squares[6]===squares[7]&&squares[6]===squares[8]){
    return squares[6]
  }
  // check for columns
  if(squares[0]&& squares[0]===squares[3]&&squares[0]===squares[6]){
    return squares[0]
  }
  if(squares[1]&& squares[1]===squares[4]&&squares[1]===squares[7]){
    return squares[1]
  }
  if(squares[2]&& squares[2]===squares[5]&&squares[2]===squares[8]){
    return squares[2]
  }
  // Check for diagonal wins
  if(squares[0]&& squares[0]===squares[4]&&squares[0]===squares[8]){
    return squares[0]
  }
  if(squares[2]&& squares[2]===squares[4]&&squares[2]===squares[6]){
    return squares[2]
  }
  }
  const winner= calculateWinner(board);
  const isDraw = board.every(square => square !== null) && !winner;

  let status;
  if(winner){
    status = `winner : ${winner}`
  }else if(isDraw) {
    status = "It's a draw!"
  }else {
    status = `Next Player :${isXNext ? 'X' : 'O'}`
  }
 
  return (
    <div>
      <Header />

      <div className="game">
        <div className="status">{status}</div>

        <div  className="board" style={{display:'grid',gridTemplateColumns:'repeat(3,100px)'}}>

          {
            board.map((squares,index)=>{
              return(
                <button className="square"  key={index} onClick={()=>handleClick(index)} disabled={!!squares || !!winner} >{squares}</button>
              )
            })
          } 
        </div>
        <button className="restart-button" onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;

