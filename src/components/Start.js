import React,{useContext} from 'react'
import {TTTContext} from '../Helper/Tic';
function Start() {
  const {direction , setDirection} = useContext(TTTContext)
  return (
    <div className=" container  w-screen h-screen justify-center  flex  bg-orange-900 p-4">
      <div className = "card items-center bg-green-900 w-[40%] h-[60%] shadow-lg hover:outline-white">
      <div className="my-4 p-2 ml-9"><p className="text-[30px] font-semibold text-blue-100">Welcome to Tic-Tac-Toe Game</p></div>
      <div className="items-center justify-center p-6 font-semibold text-slate-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ipsam numquam, iusto sint aspernatur ad cupiditate reiciendis laboriosam facere assumenda, eligendi placeat in voluptatibus amet voluptatem aut voluptates eum fugiat?</div>
      <div className="flex items-center justify-center my-3"><button className="bg-red-900 p-3 shadow-lg my-5 rounded-md text-white " onClick={() => {setDirection("Tutorials")}}>How to play</button></div>
      <div className=" flex items-center justify-center my-2"><button className="bg-blue-900 p-3 rounded-md text-yellow-50" onClick={() => {setDirection("Game")}}> Start the game</button></div>
    </div>
    </div>
    
  )
}

export default Start