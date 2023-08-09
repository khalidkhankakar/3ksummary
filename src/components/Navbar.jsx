import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className='flex h-16 bg-orange-200 justify-around items-center w-[80%] m-auto shadow-md rounded-xl mt-4' >
      <span className='text-2xl text-orange-600 font-bold'>3K SUMMARIZER</span>
      <button className='hover:bg-orange-400 hover:text-orange-800 border border-2 border-orange-500 text-yellow-600 rounded-md py-1 px-2'>GitHub</button>
      </div>
      <h1 className='text-center font-extrabold text-4xl font-mono my-4 text-orange-500'>Summarize your artical with 3K summarizer</h1>
      <h2 className='text-center font-extrabold text-7xl text-orange-600 '>AI GPT-4</h2>
      <p className="text-center my-3 text-xl text-orange-800">This is an AI tranied model using the an Article Extractor and Summarizer API to generate the best URL artical summary. <br />This is an advance AI-software and summarize your artical in simple language.</p>
    </>
  )
}

export default Navbar
