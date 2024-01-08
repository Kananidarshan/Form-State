import React from "react";
class Textbox2 extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    doSum(){
        var a=parseInt(this.state.txt1);
        var b=parseInt(this.state.txt2);
        var c=a+b;
        this.setState({msg:"Sum is :"+c});
    }
    render(){
        return(
            <>
            No1 : <input type="text" name="txt1" onChange={(e)=>this.setState({txt1:e.target.value})}/>
            No2 : <input type="text" name="txt2" onChange={(e)=>this.setState({txt2:e.target.value})}/>
            <input type="button" value="Sum" onClick={this.doSum.bind(this)}/>
            <br/>
            {this.state.msg}
            </>
        )
    }
}
export default Textbox2;
