import React from 'react';
import {connect} from 'react-redux';
import anotherName from '../../Action/Myaction'

function Reduxexample(props){
    console.log(props)
    return (
        <div> 
            <h1>I am a Component</h1>
            <h2>My name is {props.myname}</h2>
            <button  onClick={()=>{props.changeName()}}>Change It</button>
        </div>
    );
}

const mapStateToProp = (state)=>{
    return{
        myname : state.name
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        changeName: () => {dispatch(anotherName())}
    }
}

export default connect(mapStateToProp,mapDispatchToProps)(Reduxexample);
