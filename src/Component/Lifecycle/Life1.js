import React from 'react'

class Lifecycle extends React.Component {
    constructor(props) {
      super(props);
      console.log("Life1  --- Constructor is Called");
      this.state = {favoritecolor: "blue"};
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log("Life1  - getDerivedStateFromProps invoked");
    //     return {favoritecolor: props.favcol };
    // }

    //   componentDidMount() {
    //     console.log("Life1- ComponentDid Mounted fffffffffffffffff")

    //       setTimeout(() => {
    //         console.log("Life1- ComponentDid Mounted")
    //      this.setState({favoritecolor: "Green"})
    //     }, 10000)
    // }

    //-----------------------------Updating ----------------------
    // static getDerivedStateFromProps(props, state) {
    //     console.log("Life1  - getDerivedStateFromProps invoked");
    //     console.log(props, state)
    //     return {favoritecolor: props.favcol };
    //    }
      changeColor = () => {
        this.setState({favoritecolor: "red"});
      }
    //   shouldComponentUpdate(nextProps, nextState) {
    //       console.log("life1 -- ShoudCompUpdate");
    //       console.log(nextProps, nextState)
    //       if(this.state.favcol === "pink" ){
    //           return true;
    //       };
    //       return false;
    //   }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
       console.log('Life1 -- getSnapshotBeforeUpdat')
       console.log(prevProps, prevState)
       return prevState;
      }
      componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Life1 -- componentDidUpdat')
        console.log(prevProps, prevState, snapshot)
      }



    //------------------------rendering ------------
    render(){
        console.log("Life1 --  Component Render")
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

  export default Lifecycle;