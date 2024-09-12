import React from 'react'
import { useState } from 'react'

const App = () => {
  const[color, setColor] = useState("lightgreen");
 const[text, setText] = useState("lightgreen");
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      
      <div className='flex items-center justify-center min-h-screen'>
      <h1 className='text-5xl text-center'>Hello your background color is {text}</h1></div>
      <div className='fixed flex flex-wrap justify-center top-2 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-md bg-slate-400 px-3 py-3 rounded-full'>
          <button className='outline-none px-4 text-white'
          style={{backgroundColor: "red"}} 
          onClick={()=> {setColor("red"); setText("red")}}>
              Red
          </button>
          <button className='outline-none px-4 text-white'
          style={{backgroundColor: "green"}}onClick={()=> {setColor("green"); setText("green")}}>Green
          </button>
          <button className='outline-none px-4 text-white'
          style={{backgroundColor: "lightblue"}}onClick={()=> {setColor("lightblue"); setText("lighblue")}}>Lightblue
          </button>
          <button className='outline-none px-4 text-white'
          style={{backgroundColor: "olive"}}onClick={()=> {setColor("olive"); setText("lighblue")}}>Olive
          </button>
        </div>
        </div>
    </div>
  )
}

export default App
