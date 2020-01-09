import React, { useState, useEffect } from 'react';
import Dashboard from '../../Container/Dashboard'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
const AppState1 = () => {
    const [count, setCount] = useState(0)


    const handleClick = () => {
        setCount(count + 1)
        console.log("AppState ---child Handle Clicked run")
    }

    return (
        <>  <ul><li><Link to="/">Home</Link></li></ul>
            {console.log("it is render")}
            <h1>Count : {count}</h1>
            <button type="submit" onClick={handleClick}>Add</button>
        </>
    )

}
export default AppState1;