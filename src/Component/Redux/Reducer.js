
const iState= { name : "Abhijeet",
wishes:['eat','code']}

const reducer = (state=iState, action)=>{
    console.log(`reducer=`, state, action)
    if(action.type === 'CHANGE_NAME'){
        return{
            name:action.payload
        }
    }
    return state;
}
export default reducer;
