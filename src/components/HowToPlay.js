import React,{useContext} from 'react'
import {TTTContext} from '../Helper/Tic';
function HowToPlay() {
  const {direction , setDirection} = useContext(TTTContext)  
  return (
    <div className=" container w-screen h-screen flex justify-center bg-blue-900">
      <div className="w-[40%] h-[63%] card  my-9 shadow-lg rounded-md border bg-black "><p className="text-[25px] mx-[40%] font-semibold my-4 p-2 text-red-100">Tutorials</p>
      <div className="m-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore libero unde harum quam ut? Exercitationem, recusandae quas tempore esse ex accusantium porro eveniet commodi excepturi est sit voluptate ut. Facilis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut saepe rerum repellat, ex itaque officiis laboriosam ab ullam nam, autem voluptatem modi facere architecto ducimus sequi at natus. Libero, neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis laudantium cupiditate delectus. Nemo aliquam eveniet fugiat. Labore nemo numquam quidem illum ad! Blanditiis a voluptatum consequatur alias aperiam, molestiae asperiores.</div>
      
      <div className="m-3 text-lg">Choose wisely the you will win the game!!!</div>
      <div className="m-2 items-center justify-start flex flex-col"><button className="bg-red-900 text-white text-2xl p-2 rounded-md hover:outline-white font-semibold" onClick={() => {setDirection("Start")}}>Back</button></div>
      </div>
     
    </div>
  )
}

export default HowToPlay
