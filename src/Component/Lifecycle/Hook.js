import React, {useState, useContext, useReducer, useRef} from 'react'
import useSomething from './CustomHook'
import Dashboard from '../../Container/Dashboard'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

// const App1 = () => {
// const [name, setName] = useState("Abhijet");
// const [roll, setRoll] = useState("100");

// const handleClick = () => {
//     setName("Abhijeet Jha")
//     setRoll("101")
// };

// return(
// <>
// <h1> name : {name}</h1>
// <h1>roll : {roll}</h1>/
// <button type="button" onClick={handleClick}>Change</button>
// </>
// );
// }

//-------------------------Contex--------------- 

// const themes = {
//     light: {
//       foreground: "#000000",
//       background: "#eeeeee"
//     },
//     dark: {
//       foreground: "#ffffff",
//       background: "#222222"
//     }
//   };
  
//   const alok = React.createContext(themes.light);
  
//   function App1() {
//     return (
//       <alok.Provider value={themes.dark}>
//         <Toolbar />
//       </alok.Provider>
//     );
//   }
  
//   function Toolbar(props) {
//     return (
//       <div>
//         <ThemedButton />
//       </div>
//     );
//   }
  
//   function ThemedButton() {
//     const theme = useContext(alok);
  
//     return (
//        <button style={{ background: theme.background, color: theme.foreground }}>
//         I am styled by theme context!
//       </button>
   
//     )
//   }

//-------------------------REducer

//const initialState = {count: 0};

//const initialCount = 0;
// function init(initialCount) {
//     return {count: initialCount};
//   }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//       case 'reset':
//         return init(action.payload);
//     default:
//       throw new Error();
//   }
// }

// function App1(initialCount ) {
//   const [state, dispatch] = useReducer(reducer, initialCount, init);
//   return (
//     <>
//       Count: {state.count}
//       <button
//         onClick={() => dispatch({type: 'reset', payload: initialCount})}>

//         Reset
//       </button>
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }

// 
const App1 =()=>{
 const data = useSomething();

 return (
   <>
   <ul><li><Link to="/">Home</Link></li></ul>
   <h1>Count up: {data.count}</h1>
   <button type="submit" onClick={data.handleincre}>Increment</button>
   </>
 )

}

export default App1;