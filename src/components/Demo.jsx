import React, {
  useState
} from 'react'

const Demo = () => {
  const [url_state, setUrl_state] = useState('')
  const [summary, setSummary] = useState('')

  const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${url_state}&length=3`;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '31a66909e4msh2a1cf4703e4e230p1d7808jsnd3536f6fd34d',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };
  
  const submitFunc =  async (e)=>{
    try {
      console.log("click")
      e.preventDefault();
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setSummary(result.summary)
      console.log("was Clicked")
    } catch (error) {
      e.preventDefault();
      console.error(error);
      
    }
  }




  return (
    <>
    <form className='text-center mt-20 space-x-2' onSubmit={submitFunc}>
      <label htmlFor="k" className='text-2xl'>Enter the url</label>
      <input onChange={(e)=>{setUrl_state(e.target.value);}} type="url" name='sumz' id='sumz' className='text-orange-700 font-light w-[50%] border border-2 border-orange-400 py-2 px-3 text-xl font-semibold' />
      <button type='submit' className='text-xl py-2 px-3 hover:bg-orange-400 hover:text-orange-800 border border-2 border-orange-500 text-yellow-600 rounded-md py-1 px-2'>Submit</button>
    </form>
    {summary.length>=2 && <h1 className='w-[50%] text-center m-auto text-2xl text-orange-600 font-bold my-2'>Here is summary of Artical</h1>}
    {summary.length>=2 && <p className='w-[50%] text-center m-auto'>{summary}</p>}
    </>
  )
}

export default Demo
