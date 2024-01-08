import React from "react";
class Leapyear2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {msg:""};
    }
    onChangeData(e){
        console.log(e.target.value);
        this.setState({txt1:e.target.value});
    }
    onClickData(){
        var a=this.state.txt1;
        if(a%4==0){
            this.setState({msg:"Year is Leap Year"});
        }else{
            this.setState({msg:"Year is not Leap Year"});
        }
    }
    render() {
        return (
            <>
            Year :<input type="text" name="txt1" onChange={this.onChangeData.bind(this)}/>
            <input type="button" onClick={this.onClickData.bind(this)} value="ClickMe"/>
            <br/>
            {this.state.msg}
            </>
        );
    }
}

export default Leapyear2;