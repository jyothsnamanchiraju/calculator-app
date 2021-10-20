import React, {Component} from "react"; 
import {Button}  from "@material-ui/core"; 
import Division from 'mdi-material-ui/Division'; 
import Multiplication from 'mdi-material-ui/Multiplication'; 
import Plus from 'mdi-material-ui/Plus'; 
import Minus from 'mdi-material-ui/Minus'; 
import Equal from 'mdi-material-ui/Equal'; 
import { TextField } from "@material-ui/core";

import './Calculator.css'; 

class Calculator extends Component{
    constructor(){
        super(); 
        this.state = {
            operationValue:"",
            answer:0,
            num1:0,
            num2:0,
            operator:""
        }
    }

    /** Below function clears the answer space */
    clearAnswerHandler=()=>{
        this.setState({answer:0, num1:0, operator:"", operationValue:""}); 
    }

    /*Below function is invoked to create numbers and displayed on screen when a digit is pressed.*/ 
    numberHandler=(e)=>{
        
        var num = (this.state.answer)*10; 
            num = num + e; 

        if(this.state.num1 ===0){
            this.setState({answer:num, num1: num});
            }
        else {
            this.setState({answer:num, num2: num});
        }
        
    }

    /** This function is invoked upon clicking an operator */
    operatorHandler=(o)=>{

        var n1 = this.state.num1;     
        var n2 = this.state.num2;
        var op = this.state.operator;
        var ans = this.state.answer; 

       if((this.state.num2!==0 && this.state.operator!=="")){
            if(this.state.operator==="+"){
                this.setState({answer: n1+n2});
                ans =n1+n2;
            }
            else if(this.state.operator ==="-"){
                this.setState({answer:n1-n2}); 
                ans= n1-n2;
            }
            else if(this.state.operator ==="*"){
                this.setState({answer: n1*n2}); 
                ans= n1*n2; 
            }
            else if(this.state.operator ==="/"){
                this.setState({answer: n1/n2}); 
                ans= n1/n2; 
            }
            this.setState({num1:0, num2:0, operationValue: n1+op+n2+"="});

           if(o!== "=")
                this.setState({operator:o, num1: ans, answer:0});
           else 
                this.setState({operator:"", num1:0, num2:0});     
        }
       else{
            this.setState({num1:ans, num2:0, answer:0, operator:o, operationValue:ans});
        } 
        
    }


    render(){
        return(
            <div className='board'> 
                                
                <div className="answer-row" >
                    <TextField disabled id="operation" value={this.state.operationValue} className="operation">
                                {this.state.operationValue}
                    </TextField>
                    { (this.state.answer===0)? (
                    <TextField disabled id="answer" value={this.state.num1} className="answer" > 
                                {this.state.num1} 
                    </TextField>)
                    : (
                        <TextField disabled id="answer" value={this.state.answer} className="answer" > 
                                {this.state.answer} 
                        </TextField>
                    )
                    }
                    
                </div>
                <div className="row" id="row1">
                    <Button className="cell" onClick={this.clearAnswerHandler}>Clear</Button>
                    <Button className="cell" value="0" onClick={()=> this.numberHandler(0)}>0</Button>
                    <Button className="cell" value="*" onClick={()=> this.operatorHandler("*")}><Multiplication/></Button>
                    <Button className="cell" value="/" onClick={()=> this.operatorHandler("/")}><Division/></Button> 
                </div>

                <div className="row" id="row2" >
                    <Button className="cell" value="7" onClick={()=>this.numberHandler(7)}> 7    </Button>
                    <Button className="cell" value="8" onClick={()=>this.numberHandler(8)}> 8    </Button>
                    <Button className="cell" value="9" onClick={()=>this.numberHandler(9)}> 9    </Button>
                    <Button className="cell" value="-" onClick={()=>this.operatorHandler("-")}> <Minus/> </Button>
                </div>
                
                <div className="row" id="row3" >
                    <Button className="cell" value="4" onClick={()=>this.numberHandler(4)}>4</Button>
                    <Button className="cell" value="5" onClick={()=>this.numberHandler(5)}>5</Button>
                    <Button className="cell" value="6" onClick={()=>this.numberHandler(6)}>6</Button>
                    <Button className="cell" value="+" onClick={()=>this.operatorHandler("+")}><Plus/></Button>
                </div>

                <div className="row" id="row4">
                    <Button className="cell" value="1" onClick={()=>this.numberHandler(1)}>1</Button>
                    <Button className="cell" value="2" onClick={()=>this.numberHandler(2)}>2</Button>
                    <Button className="cell" value="3" onClick={()=>this.numberHandler(3)}>3</Button>
                    <Button className="cell" value="=" onClick={()=>this.operatorHandler("=")}><Equal/></Button>
                </div>
            </div>
        ); 
    }
}

export default Calculator; 