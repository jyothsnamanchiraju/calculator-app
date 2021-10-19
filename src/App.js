import React, {Component} from 'react'; 
import Header from './Header'; 
import Calculator from './Calculator'; 
import './index.css'; 

class  App extends Component {
  render(){
  return (
    <div className="app">
        <Header/>
        <Calculator/>
    </div>
  );
  }
}

export default App;
