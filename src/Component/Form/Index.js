import React from 'react'
import Dashboard from '../../Container/Dashboard'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            contact: "",
            adress: "",
            show  : false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        // alert("A name submitted : " + this.state.fname)
        e.preventDefault();
        console.log(this.state)
        this.setState({
            show : true
        })
    }

    render() {
        return (

            <div>
                <ul><li><Link to="/">Home</Link></li></ul>
                <form onSubmit={this.handleSubmit}>
                    <lable>
                        First name:
                        </lable>
                    <input
                        name="fname"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <br />
                    <lable>
                        Last name:
                        </lable>
                    <input
                        name="lname"
                        type="text"
                        value={this.state.lname}
                        onChange={this.handleChange}
                    />
                    <br />
                    <lable>
                        Email:
                        </lable>
                    <input
                        name="email"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <br />
                    <lable>
                        Contact no:
                        </lable>
                    <input
                        name="contact"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <br />
                    <lable>
                        Adress:
                        </lable>
                    <input
                        name="adress"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="submit"
                        value="Show info"
                         />
                </form>
               {this.state.show && this.state.show && <div>
                    <p>first name : {this.state.fname}</p>
                    <p>last name: {this.state.lname}</p>
                    <p>Email id : {this.state.email}</p>
                    <p>Contact {this.state.contact}</p>
                    <p>Adress {this.state.adress}</p>
                </div> }
            </div>

        )
    }
}
export default Form;