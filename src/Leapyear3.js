import React from "react";

class Leapyear3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    onClickData(){
        var a=this.state.txt1;
        if(a%4==0){
            this.setState({msg:"Year is Leap Year"});
        }else{
            this.setState({msg:"Year is not leap Year"});
        }
    }
    render() {
        return (
          <>
          Year :<input type="text" name="txt1" onChange={(e)=>(this.setState({txt1:e.target.value}))}/>
          <input type="button" onClick={this.onClickData.bind(this)} value="ClickMe"/>
          <br/>
          {this.state.msg}
          </>  
        );
    }
}

export default Leapyear3;