import React, {useState, useEffect} from 'react'

const App2 = () => {
    const [count, setCount]= useState(0);
    const [count1, setCount1]= useState(0);

   const  handleIncrement =() => {
       setCount(count + 1)
   }
   const  handleDecrement =() => {
    setCount1(count1 - 1)
}

   useEffect(() => {
       document.title= `you Clicked ${count} times`;
    })


   return(
       <>
        <h1>Increment   :   {count}</h1>
        <button type="button" onClick={handleIncrement}>Incremet</button>
        <h1>Increment   :   {count1}</h1>
        <button type="button" onClick={handleDecrement}>Incremet</button>
        </>

   )
}
export default App2;