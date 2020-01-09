import React, { useState, useReducer } from 'react'
import { connect } from 'react-redux'
import anotherName from '../../Action/Bulbtable';

const Bulbadmin = (props) => {
    console.log('props props props', props.myname.name.list)
    // const [show, setshow] = useState(false)
    // let data = props.myname.name
    // console.log("data data daataa", data)
    // console.log("data data daataa", data.length)

    return (
        <div>
            <h1>Bulb admin apis</h1>
            <button onClick={() => { props.changeName()}}>show data</button>
            {/* <h3>Status : {props.myname.name}</h3> */}
            {/* <h3>Message : {props.myname.name.message}</h3> */}
            {JSON.stringify(props.myname.name)}
            {/* <div>
                {!props.myname.name.length > 0 && props.myname.name.map((user) => {
                    console.log(user)
                    return (
                        <div>
                        </div>

                    )
                })}
            </div> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myname: state.bulb
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: () => { dispatch(anotherName()) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bulbadmin)
