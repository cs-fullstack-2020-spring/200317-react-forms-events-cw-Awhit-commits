import React, { Component } from 'react'

export default class AddAdoptionForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             age:0,
             breed:"",
             potty:"",
             color:"",
             availDog:[]
        }
    }
    handleSubmission = (event) =>{
        event.preventDefault();
        this.state.availDog.push({
            dogName:this.state.name,
            dogAge:this.state.age,
            dogBreed:this.state.breed,
            dogPotty:this.state.potty,
            dogColor:this.state.color
        })
       
        this.setState({availDog:this.state.availDog})
        console.log(this.state.availDog)
        this.props.updateAvaliDog(this.state.availDog)
        

    }

    handleInputChange = (event) =>{
        if (event.target.name ==="name"){
            this.setState({name:event.target.value})


        }
        else if (event.target.name ==="age"){
            this.setState({age:event.target.value})

        }
        else if (event.target.name ==="breed"){
            this.setState({breed:event.target.value})
        }

        else if (event.target.name ==="color"){
            this.setState({color:event.target.value})
        }
        else if (event.target.checked){
            this.setState({
            potty:`The Dog is potty trained`
            })
        }
        else{
            this.setState({
                potty:`The dog is not potty trained`
            })
        }


    }
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Dog Avaliabilty Form</legend>
                        <p>
                        <label htmlFor="name">Dog Name: </label>
                        <input onChange= {this.handleInputChange} type="text" name="name" id="name" value = {this.state.name}/>
                        </p>
                        <p>
                            <label htmlFor="age"> Dog Age:</label>
                            <input onChange={this.handleInputChange} type="number" name="age" id="age" value ={this.state.age}/>
                        </p>

                        <p>
                            <label htmlFor="breed"> Dog Breed: </label>
                            <input onChange={this.handleInputChange} type="text" name="breed" id="breed" value = {this.state.breed}/>
                        </p>
                        <p>
                            <label htmlFor="potty">Potty Trained? </label>
                            <input onChange = {this.handleInputChange} type="checkbox" name="potty" id="potty" value = {this.state.potty}/>

                        </p>
                        <p>
                            <select onChange = {this.handleInputChange} name="color" id="" value = {this.state.color}>
                                <option value="">Please Select a Color</option>
                                <option value="white">White</option>
                                <option value="bronw">Brown</option>
                                <option value="black">Black</option>
                                <option value="spotted">Spotted</option>
                                <option value="other">Other</option>
                            </select>
                        </p>
                        <button onClick = {this.handleSubmission}>Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}
