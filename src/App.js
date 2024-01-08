import React from "react";
import Counter1 from "./Counter1";
import Leapyear1 from "./Leapyear1";
import Leapyear2 from "./Leapyear2";
import Leapyear3 from "./Leapyear3";
import Form1 from "./Form1";
import Textbox1 from "./Textbox1";
import Textbox2 from "./Textbox2";
import Sum1 from "./Sum1";
import Sum2 from "./Sum2";
import Radio1 from "./Radio1";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txt1 :"" };
  }
  render() {
    return (
      <>
      Form on Change Get Value
      <br/>
      <input type="text" onChange={(e)=>(this.setState({txt1:e.target.value}))}/>
      <br/>

      {this.state.txt1}
      <hr/>
      Leapyear :<br/><br/>
      <Leapyear1/>
      <hr/>
      onChange And Submit  :<br/>
      <Counter1/>
      <hr/>
      <Leapyear2/>
      <hr/>
      <Leapyear3/>
      <hr/>
      <Form1/>
      <hr/>
      <Textbox1/>
      <hr/>
      <Textbox2/>
      <hr/>
      <Sum1/>
      <hr/>
      <hr/>
      <Sum2/>
      <hr/>
      <Radio1/>

      </>
    );
  }
}
export default App;