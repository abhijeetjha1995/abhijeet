
import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
}
 componentWillMount(){
     console.log('Life2 Is mounted')
 }
componentWillUnmount(){
    console.log('Life2 Is  unmounted')
}

  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}
export default Container;