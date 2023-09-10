import React, { useState } from 'react'

export function Scanner() {
    const [text,setText]=useState(" ");
    const[length,setLength]=useState("100");
    const[bord,setBord] = useState(length);
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        setText(e.target.data.values);
        setLength(e.target.height.values);
        setBord(e.target.width.values);
        console.log(e.target.data.values);
        console.log(e.target.height.values);
        console.log(e.target.width.values);
    }
  return (
    <div className='container'>
      
      <div className='app-wrapper'>
      
        <form onSubmit={handlesubmit}>
          <label>Enter the data:</label>
          <input  type='text' name='data' onChange={(e)=>setText(e.target.value)} values={text} /><br />
          

          <label>Height:</label><input  type='number' name='height' onChange={(e)=>setLength(e.target.value)} values={length}/>
          <label>Width:</label><input  type='number' name='width' onChange={(e)=>setBord(e.target.value)} values={bord}/><br />
         
          <input type="submit" />
        </form>
        
        <img src= {`https://api.qrserver.com/v1/create-qr-code/?data=${text}&amp;size=${length}x${bord}" alt="" title="" `}/>
      </div>
    </div>
  )
}

