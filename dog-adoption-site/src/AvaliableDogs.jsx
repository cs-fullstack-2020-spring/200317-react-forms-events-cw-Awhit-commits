import React, { Component } from 'react'

export default class AvaliableDogs extends Component {
    render() {
        return (
            <div className = "avaliable">
                {
                    this.props.availDogs.map((dog)=>{
                        return(<div><p>{dog.dogName}</p>
                            <p>{dog.dogAge}</p>
                            <p>{dog.dogColor}</p>
                            <p>{dog.dogBreed}</p>
                            <p>{dog.dogPotty}</p></div>)

                    })
                }
            </div>
        )
    }
}
