import React, { Component } from 'react'
import AddAdoptionForm from './AddAdoptionForm'

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
            <div>
                <AddAdoptionForm/>
            </div>
        )
    }
}
