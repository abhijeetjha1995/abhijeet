import React from 'react';
import Dashboard from '../../Container/Dashboard'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class ScrollingList extends React.Component {
    constructor(props) {
      super(props);
      this.listRef = React.createRef();
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      // Are we adding new items to the list?
      // Capture the scroll position so we can adjust scroll later.
      if (prevProps.list.length < this.props.list.length) {
        const list = this.listRef.current;
        return list.scrollHeight - list.scrollTop;
      }
      return null;
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      // If we have a snapshot value, we've just added new items.
      // Adjust scroll so these new items don't push the old ones out of view.
      // (snapshot here is the value returned from getSnapshotBeforeUpdate)
      if (snapshot !== null) {
        const list = this.listRef.current;
        list.scrollTop = list.scrollHeight - snapshot;
      }
    }
  
    render() {
      return (

        <div ref={this.listRef}>{/* ...contents... */}
        <ul><li><Link to="/">Home</Link></li></ul></div>
      );
    }
  }
  export default ScrollingList;