
const nameReducer = (state='', action)=>{
    console.log(`reducer=`, state, action)
    if(action.type === 'CHANGE_NAME'){
        return{
            name:action.payload
        }
    }
    return state;
}
export default nameReducer;
