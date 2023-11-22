import React, { useState } from 'react'

const Pract = () => {

    const [test, setTest] =useState("");
    const handleForm =(e)=>{
        e.preventDefault();
        // setTest(e.target.value);
        console.log(test)
    }
  return (
    <form onSubmit={handleForm}>
        <input type="text" value={test} onChange={(e)=>setTest(e.target.value)} />
        <input type="submit" value="Submit" />
    </form>
  )
}

export default Pract