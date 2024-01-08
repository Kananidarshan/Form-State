import React from "react";

class Counter1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { no1:0,msg:''};
    }
    onclickvalue(){
        this.setState({no1:this.state.no1+1});
    }
    onchangeValue(e){
        var myvalue=e.target.value;
        this.setState({msg:myvalue});
    }
    render() {
        return (
            <div>
                <h3>Counter</h3>
                {this.state.no1}
                <br/>
                
                <button onClick={this.onclickvalue.bind(this)}>Counter</button>
                <h3>Message Print</h3>
                <input type="text" name="txt1" onChange={this.onchangeValue.bind(this)}/>
                <br/>
                {this.state.msg}
            </div>
        );
    }
}

export default Counter1;