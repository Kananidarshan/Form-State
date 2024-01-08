import React from "react";

class Radio1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            gender:""
        };
    }
    handleChange=(e)=>{
        this.setState({
            gender:e.target.value
        })
    }
    render(){
        return(
            <>
            <form>
                <input type="radio" value="male" id="male" onChange={this.handleChange} name="gender"/>
                <label for="male">Male</label>
                <input type="radio" value="female" id="female" onChange={this.handleChange} name="gender"/>
                <label for="female">Female</label>
            </form>
            <p>Your gender is {this.state.gender}</p>
            </>
        )
    }
}
export default Radio1;