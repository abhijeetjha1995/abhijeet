import React from 'react'
import './style.css'
class Company3 extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
componentDidMount(){
    console.log("App Mounted")
}
componentWillUnmount(){
    console.log("App will Uncount")
}

    render() {
        return (
            <>
            <h1>App Mounted</h1>
            </>
        )
    }
}

export default Company3;
