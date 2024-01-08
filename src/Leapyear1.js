import React from "react";

class Leapyear1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { txt1 :" " };
    }

    onChangeDate(e){
        var a=e.target.value;
        if(a%4==0){
            this.setState({msg:"Year is Leap Year"});
        }else{
            this.setState({msg:"Year is not Leap Year"});
        }
    }
    render() {
        return (
            <>
            Year :<input type="text" name="txt1" autoComplete="off" onChange={this.onChangeDate.bind(this)}/>
            <br/>
            {this.state.msg}
            </>
        );
    }
}
export default Leapyear1;