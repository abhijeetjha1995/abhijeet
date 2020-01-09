import React from 'react'
import './style.css'
class Company extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
componentDidMount(){
    console.log("Company Mounted")
}
componentWillUnmount(){
    console.log("Company will Uncount")
}

    render() {
        return (
            <>
            <h1>Company Name :{this.props.comp}</h1>
            <h2>No of Employee : {this.props.emp}</h2>
            <h3>Location : {this.props.loc}</h3>
            </>
        )
    }
}

export default Company;
