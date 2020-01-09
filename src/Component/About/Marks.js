import React, {Component} from 'react'

export default class Marks extends Component{
    constructor(props){
        super(props);
        this.state={
            mroll : null
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log("get derived State from Props");
        console.log('get derived State from Props----state', state);
        console.log('get derived State from Props----props', props);
        // console.log(props, state);
        if (props.roll !== state.mroll){
            return {mroll: props.roll};
        }
        return false;
    }
    shouldComponentUpdate(nextProps, nextState){
       console.log('nextState', nextState);
         console.log('nextProps', nextProps);       
          if (this.state.mroll<110){
            console.log("Should Component Update");
            console.log('in if loop nextState', nextState);
            console.log('in if loop', nextProps); 
            return true;
        }
        console.log(nextProps, nextState)
        return true;
    }
    render(){
        return <h1>{this.state.mroll}</h1>
    }
}