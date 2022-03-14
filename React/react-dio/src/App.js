import React, {Component} from 'react';
import Button from './Teste';
import './style.css';

/*
function App() {
  return (
    <div>
      <h1>SALVE</h1>
      <Button onClick = {() => soma(10, 20)} name = 'Paulinho'/>
      <Pai>
        <Filho>
          <Button onClick = {() => soma(10, 20)} name = 'Paulinho'/>
        </Filho>
      </Pai>
    </div>
  );
}
*/
class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      clock: 1000,
      copo: 'agua'
    }
  }
  
  alterarCopo(){
    this.setState({
      copo: 'refri'
    })
  }

  render(){
    const {clock, copo} = this.state;
    return(
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}>{copo}</button>
      </div>
    )
  }
}

export default App;
