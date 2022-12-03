import React, { useState } from 'react';
import './TikTacToe.css';
const TikTacToe = () => {
  const [turn,setTurn] = useState('x');
  const [cell ,setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);
  const checkForWinner = (squares) =>{
    let combos = {
      across : [
       [0,1,2],
       [3,4,5],
       [6,7,8],
      ],
      down : [
        [0,3,6],
        [1,4,7],
        [2,5,8],
      ],
      diagonal : [
        [0,4,8],
        [2,4,6],
      ],
    };
    for(let combo in combos){
      combos[combo].forEach((pattern) =>{
        if(squares[pattern[0]] === "" || squares[pattern[1]] === "" || squares[pattern[2]] === "")
        {

        }
        else if (squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]] ){
          setWinner(squares[pattern[0]])

        }
      })
    }



  };
  const Cell =({num}) =>{
    return <td className="text-3xl text-white" onClick={() => handleClick(num)}>{cell[num]}</td>
  }
  const handleClick = (num) =>{
    if(cell[num] !== ""){
      alert('already clicked');
      return;
    }
    if(winner !== null)
    {
      alert("Winner has been declared");
      return; 
    }
    let squares = [...cell]

    if(turn === 'x'){
      squares[num] = 'x';
      setTurn('o');
    }
    else{
      squares[num] = 'o';
      setTurn('x');
    }
    checkForWinner(squares);
    setCells(squares)

  }
  const handleRestart = () =>{
    setWinner(null);
    setCells(Array(9).fill(""));
  }
  return (
  
    <div className="w-screen h-screen justify-center items-center flex bg-blue-900 ">
      <div className="card container items-center justify-center w-auto h-auto bg-red-900 rounded-lg shadow-lg outline hover:outline-white">
      <h1 className="items-center justify-center flex my-5 text-3xl font-semibold text-yellow-100">Tic-Tac-Toe</h1>
      <p className="items-center justify-center flex mt-[70px] mr-[200px] font-semibold text-[28px] text-white ">Turn : {turn}</p>
      <table className="items-center justify-center mx-[140px] mb-[70px] mt-2 shadow-md">
        
        <tbody>
          <tr>
            <Cell num = {0}/>
            <Cell num = {1}/>
            <Cell num = {2}/>
          </tr>
          <tr>
            <Cell num = {3}/>
            <Cell num = {4}/>
            <Cell num = {5}/>
          </tr>
          <tr>
            <Cell num = {6}/>
            <Cell num = {7}/>
            <Cell num = {8}/>
          </tr>
        </tbody>

      </table>
      {
        winner && (
          <div className = "items-center justify-center mx-[225px]">
          <p className="mt-6 font-semibold text-[20px] text-pink-100">{winner} is the winner</p>
          <button className="my-3  bg-orange-400 rounded-md p-4" onClick={() => handleRestart()}>Play Again</button>

          </div>
        )
      }
      {/* <div className="flex flex-row gap-8 mb-9">
      <button className="ml-[220px] bg-green-900 p-2 rounded-lg text-white ">Play Again</button>
      <button className="bg-purple-900 p-2 rounded-lg text-yellow-50"> Start</button>
      </div> */}
      
      </div>
     
    </div>
    
  )
}

export default TikTacToe
