import React from "react";

class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { txt1:"",ans:""};
    }
    onSubmitData(e){
        this.setState({ans:"Ans is "+this.state.txt1});
        e.preventDefault();
    }
    render() {
        return (
            <>
            <form onSubmit={this.onSubmitData.bind(this)}>
                Name :<input type="text" onChange={(e)=>(this.setState({txt1:e.target.value}))}/>
                <br/>
                <input type="submit"/>
            </form>
            {this.state.ans}
            </>
        );
    }
}
export default Form1;