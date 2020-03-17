import React, { Component } from 'react'
import AddAdoptionForm from './AddAdoptionForm'
import AvaliableDogs from './AvaliableDogs'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             availDogs:[]
        }
    }
    updateAvailDogs = (updatedAvailDogs) =>{
        this.setState({availDogs:updatedAvailDogs})
    }
    render() {
        return (
            <div className="doggo">
                <AddAdoptionForm updateAvailDogs = {this.updateAvailDogs}/>
                <AvaliableDogs availDogs = {this.state.availDogs} />
            </div>
        )
    }
}
