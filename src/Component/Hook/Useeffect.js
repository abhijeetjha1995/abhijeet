import React, { useState, useEffect } from 'react';
import Dashboard from '../../Container/Dashboard'
import {  Link  } from 'react-router-dom'

let alok = 0
const AppState = () => {
    const [count, setCount] = useState(0)


    const handleClick = () => {
        setCount(count + 1)
        console.log("AppState ---child Handle Clicked run")
    }

    // useEffect(() => {
    //     if (count > 10) {
    //         alert(`you Click ${count} times`)
    //         console.log("AppState ---child effect Count Alert ")
    //     }
    // })


    useEffect(() => {
        console.log("useEffect -- like a compononet did mount")
        document.title = `you Click ${count} times`
        return () => {
            console.log("like a component will unmount")
        }
    })

    return (
        <>  
            <ul><li><Link to="/">Home</Link></li></ul>
            {console.log("it is render")}
            <h1>Count : {count}</h1>
            <button type="submit" onClick={handleClick}>Add</button>
        </>
    )

}
export default AppState;
