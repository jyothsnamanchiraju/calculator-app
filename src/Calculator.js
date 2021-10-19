import React, {Component} from "react"; 
//import TableCell from '@material-ui/core/TableCell'; 
import { Button, Divider } from "@material-ui/core"; 
//import { fa-divide } from "@fortawesome/free-solid-svg-icons"; 
//import Icon  from "@mui/material/Icon";
//import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome"; 
//import { mdiDivision } from '@mdi/js';
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
            number:0,
            //number2:0,
            operator:""
        }
    }

    clearAnswerHandler=()=>{
        this.setState({answer:0, number:0, operator:"", operationValue:""}); 
    }

    numberHandler=(e)=>{
        
        var num = (this.state.answer)*10; 
        num = num + e; 
        this.setState({answer:num}); //, number: num});
    }

    operatorHandler=(o)=>{
     /*  //console.log("inside operator handler", o); 
        var n1 = this.state.answer;
        var operation = this.state.answer + " " +o; 
       // console.log("n1= ",n1," operation = ",operation); 
        this.setState({number : n1}); 
        this.setState({operationValue: operation}); 
        this.setState({answer: this.state.number});*/ 

        var n1 = this.state.number;     
        var n2 = this.state.answer;
        if(o === "+"){
          if(this.state.number===0){
                this.setState({ number:n2,
                                operationValue: n2+"+",
                                answer:0,
                                operator:"+"});
          }
          else
            this.setState({                
                operationValue: n1+o+n2,
                number: n1+n2, 
                answer: 0,
                operator:"",
            })
        }
        else if(o === "-"){ 
            if(this.state.number === 0){
                this.setState({ number:n2, 
                                operationValue: n2+"-", 
                                answer:0, 
                                operator:"-"});
            }
            else
            this.setState({
                operationValue: n1+o+n2,
                number: n1-n2, 
                answer:0,
                operator:"" 
            });
        }
        else if(o === "*"){
            if(this.state.number===0){
                this.setState({
                    number:n2,
                    operationValue: n2+"*",
                    answer:0,
                    operator:"*"
                });
            }
            else
                this.setState({
                    operationValue: n1+o+n2,
                    number: n1*n2, 
                    answer:0,
                    operator:""
                })
        }
        else if(o==="/"){
                if(this.state.number===0){
                    this.setState({
                        number:n2,
                        operationValue: n2+"/",
                        answer:0,
                        operator:"/"
                    });
                }
                else
                    this.setState({
                        operationValue: n1+o+n2,
                        number: n1/n2,
                        answer:0,
                        operator:"/"
                    });
        }
        else if(o==="="){
            if(this.state.operator ==="+"){
                this.setState({number: n1+n2, answer:0, operationValue: n1+n2, operator:""});
            }
            else if(this.state.operator ==="-"){
                this.setState({number: n1-n2, answer:0, operationValue: n1-n2, operator:""});
            }
            else if(this.state.operator ==="*"){
                this.setState({number: n1*n2, answer:0, operationValue: n1*n2, operator:""});
            }
            else if(this.state.operator ==="/"){
                if(n2===0)
                    this.setState({operationValue:"invalid operation"}); 
                else    
                this.setState({number: n1/n2, answer:0, operationValue: n1/n2, operator:""});
            }
        }

        
    }
    render(){
        return(
            <div className='board'> 
                                
                <div className="answer-row" >
                    <TextField disabled id="operation" value={this.state.operationValue} className="operation">{this.state.operationValue}</TextField>
                   {this.state.answer === 0 ? (
                            <TextField disabled id="answer" value={this.state.number} className="answer" > 
                                    {this.state.number} 
                            </TextField>)
                            :
                            <TextField disabled id="answer" value={this.state.answer} className="answer" > 
                                    {this.state.answer} 
                            </TextField>
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