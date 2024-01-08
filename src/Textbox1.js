import react from "react";

class Textbox1 extends react.Component {
    constructor(props) {
        super(props);
        this.state = {  txt1:"",txt2:""};
    }
    handleChange1(e){
        this.setState(
            {txt1:e.target.value}
        );
    }
    handleChange2(e){
        this.setState(
            {txt2:e.target.value}
        );
    }
    handleSubmit(e){
        alert(" Your Name is :"+this.state.txt1+this.state.txt2);
        e.preventDefault();
    }
    render() {
        return (
           <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                Name :<input type="text" name="txt1" autoComplete="off" onChange={this.handleChange1.bind(this)}/><br/>
                Surname :<input type="text" name="txt2" autoComplete="off" onChange={this.handleChange2.bind(this)}/><br/>
                <input type="submit"/><br/>
                txt1 is :{this.state.txt1}<br/>
                txt2 is :{this.state.txt2}
            </form>
           </div> 
        );
    }
}

export default Textbox1;