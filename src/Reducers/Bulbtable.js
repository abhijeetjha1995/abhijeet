
const iState= { name : "alok"}


export const Bulbreducers = (state=iState, action)=>{
    console.log(`Bulbreducers=`, state, action)
    if(action.type === 'CHANGE_NAME'){
        return{
            name:action.payload
        }
    }
    return state;
}
