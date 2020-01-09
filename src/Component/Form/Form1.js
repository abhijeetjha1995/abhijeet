import React from 'react';

class Mform extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            comment: '',
            topic: 'react'
        }
    }
        handleUsernameChange = (event) => {
             this.setState({
                 username: event.target.value
            })
        }
         handleCommentChange = (event) => {
             this.setState({
                 comment: event.target.value
             })
         }
         handleTopicChange = (event) => {
             this.setState({
                topic: event.target.value
             })
         }
         handleSubmit=(event) =>{
             alert( "Data Save Sucessfully : "
              +`${this.state.username} ${this.state.comment} 
              ${this.state.topic}`);
              event.preventDefault()
         }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                     value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                 <div>
                    <label>
                        Comment
                    </label>
                    <textarea
                        value={this.state.comment}
                        onChange={this.handleCommentChange}></textarea>
                </div> 
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option></select>
                </div>
                <div>
                    <input type="submit" value="Save"></input>
                </div>
                </form>
        )
    }
}
export default Mform;