// const  anotherName= (name) =>{
//     return {
//         type:'CHANGE_NAME',
//         payload:name
//     }
// }
// export default anotherName;

//--------------- bye the use of then

// const anotherName = ()=>{
//     return (dispatch)=>{
//         fetch('https://jsonplaceholder.typicode.com/users').
//         then(res=>res.json()).
//         then(res2=>{
//             dispatch({type:'CHANGE_NAME',payload:res2[0].name})
//         })
//     }
// }
//-----------------BYE      THE USE OF ASYNc AND AWIT ------ 
const anotherName = ()=>{
    return async (dispatch)=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const res2 = await (data.json())
            dispatch({type:'CHANGE_NAME',payload:res2[0].name})
        }
    }

export default anotherName;