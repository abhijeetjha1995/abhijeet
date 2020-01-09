import React, {useReducer,} from 'react';
import AppState from './Useeffect'
import Dashboard from '../../Container/Dashboard'
import {  Link  } from 'react-router-dom'

const intialstate = 0;

function reducer(state, action){
    console.log('Reducer function run')
    switch (action.type) {
        case 'Incremet':
            return {count: state.count +1};
        case 'Decrement':
            return {count: state.count -1};
        case 'Reset' :
            return {count : intialstate}
        }
    }
    function Counter(){
        const [state, dispatch] = useReducer(reducer, {count : intialstate});
        return (
            <>
            <ul><li><Link to="/">Home</Link></li></ul>
            <h1>Count NO : {state.count} </h1>
            <button type="submit" onClick={()=>dispatch({type: 'Incremet'})}>Increment</button>
            <button type="submit" onClick={()=>dispatch({type: 'Decrement'})}>Decrement</button>
            <button type="submit" onClick={()=>dispatch({type: 'Reset'})}>Reset</button>
            <AppState /> 
            </>
        )
    }

// const intialstate = "GOOD MORNING";

// function reducer(state, action){
//     console.log('Reducer function run')
//     switch (action.type) {
//         case '+':
//             return {ALPHA: "GOOD AFTERNOON"};
//         case '-':
//             return {ALPHA: "GOOD NIGHT"};
//         case '*' :
//             return {ALPHA : intialstate};
//         default:
//             throw new Error();
              
//         }
//     }
//     function Counter(){
//         const [state, dispatch] = useReducer(reducer, {ALPHA : intialstate});
//         return (
//             <>
//             <h1>HALLO MR. : {state.ALPHA} </h1>
//             <button type="submit" onClick={()=>dispatch({type: '+'})}>AFTER12</button>
//             <button type="submit" onClick={()=>dispatch({type: '-'})}>AFTER 7PM</button>
//             <button type="submit" onClick={()=>dispatch({type: '*'})}>Reset</button>
//             {/* <AppState /> */}
//             </>
//         )
//     }

export default Counter;