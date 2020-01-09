import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Company2 from '../../Component/Company/Company2';
// import Company3 from './Component/Company/Company3';
// import Lifecycle from './Component/Lifecycle/Life1'
// import Container from './Component/Lifecycle/Life2'
import Student from '../../Component/About/Student'
import ScrollingList from '../../Component/Lifecycle/Snapshoot'
//  import App2 from './Component/Lifecycle/Hookefect'
import App1 from '../../Component/Lifecycle/Hook'
import AppState from '../../Component/Hook/Useeffect'
import Counter from '../../Component/Hook/Usereduser'
import AppState1 from '../../Component/Hook/Usestate'
// import Counter from './Component/Hook/Payload'
// import Company2 from './Component/Company/Company2';
import About from '../../Component/About/index';
import Form from '../../Component/Form/Index'
// import Mform from './Component/Form/Form1'
// import Reservation from './Component/Form/Checkform'
// import Lifecycle from './Component/Form/Lifecycle'
import Ifelse from '../../Component/Coundition/Ifelse'
import Reduxexample from '../../Container/Reduxexample'
import Bulbadmin from '../Bulbadmin'

const Navigation = () => {
    return (
        <Router>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/shouldcomponentupdate" component={Student} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/usestate" component={AppState1} />
            <Route exact path="/getsnapshotbeforeupdate" component={ScrollingList} />
            <Route exact path="/state" component={About} />
            <Route exact path="/props" component={Company2} />
            <Route exact path="/useeffect" component={AppState} />
            <Route exact path="/Reducer" component={Counter} />
            <Route exact path="/Custom" component={App1} />
            <Route exact path="/IF" component={Ifelse} />
            <Route exact path="/redux" component={Reduxexample} />   
            <Route exact path="/bulbadmin" component={Bulbadmin} />         
      
        </Router>
    )
}
export default Navigation