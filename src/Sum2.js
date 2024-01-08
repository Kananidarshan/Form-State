import React from "react";

class Sum2 extends React.Component{
    constructor(props){
        super(props);
        this.state={txt1:"",txt2:"",txt3:"",ans:""};
    }
    onSubmit(e){
        var no1=this.state.txt1;
        var no2=this.state.txt2;
        var no3=this.state.txt3;
        var sum =parseInt(no1)+parseInt(no2)+parseInt(no3);
        this.setState({sum:"No of Sum is"+sum});
        e.preventDefault();

    }
    render(){
        return(
            <>
            <form onSubmit={this.onSubmit.bind(this)}>
                NO1 :<input type="text" onChange={(e)=>(this.setState({txt1:e.target.value}))}/>
                No2 :<input type="text" onChange={(e)=>(this.setState({txt2:e.target.value}))}/>
                No3 :<input type="text" onChange={(e)=>(this.setState({txt3:e.target.value}))}/>
                <br/>
                <input type="submit"/>
            </form>
            {this.state.sum}
            </>
        )
    }
}
export default Sum2;