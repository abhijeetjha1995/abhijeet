import React from 'react'

export default class Lifecycle extends React.Component{
    constructor(props){
        super(props);
        this.state={roll: '123'}
        console.log("App - Constructor Called");
        console.log(props)
    }

    static getDerivedStateFromProps(props, state){
        console.log("App -  get derived state from Props");
        console.log(props, state);
        return null
    }
    componentDidMount(){
        console.log("App- Component did mount")
    }
    render(){
        console.log("App- Rendering")
        return <h1>HAllo {this.props.name}</h1>
    }
}