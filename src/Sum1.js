import React from "react";

class Sum1 extends React.Component{
    constructor(props){
        super(props);
        this.state={txt1:"",txt2:"",ans:""};
    }
    onSubmit(e){
        var no1=this.state.txt1;
        var no2=this.state.txt2;
        var sum=parseInt(no1)+parseInt(no2);
        this.setState({ans:"Sum is"+sum});
        e.preventDefault();
    }
    render(){
        return(
            <>
            <form onSubmit={this.onSubmit.bind(this)}>
                No1 :<input type="text" onChange={(e)=>(this.setState({txt1 :e.target.value}))}/><br/>
                No2 :<input type="text" onChange={(e)=>(this.setState({txt2 :e.target.value}))}/><br/>
                <input type="submit"/>
            </form>
            {this.state.ans}
            </>
        )
    }
}
export default Sum1;