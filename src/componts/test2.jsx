
import React,{Component} from "react";
import '../styles/test.css';
import { Button } from 'primereact/button';

class Tag extends Component {
    state = { 
        count:0,
        steps:[
            "Step 1: Click on button to change value ",
            "Step 2: Click on button again to change value also "
        ],
        colors:["","",""]
     }

     hc=()=>{
        

        this.setState(
            preS =>(
                {
                    count:preS.count+1

                }
            )
        )
     };

     dc=()=>{
        

        this.setState(
            preS =>(
                {
                    count:preS.count-1

                }
            )
        )
     };

     testFun(){
      var t= this.state.count;
      return t===0?"zero":t;
     }
     st={
        fontSize:"40px"

     }
      
     render() { 

       var colorB= "btn btn-";
       colorB+=this.state.count<=0?"danger":"primary";
        return ( 
            <div>
                <div style={
                    {
                        height:"50px",
                        width:"100vw",
                        background:"#0196FC",
                       
                    }
                }></div>
            

            <div className="bodTest">
            
           
            <h1><span style={this.st}>  {this.testFun()}</span> </h1>
             
           {
            this.showListSteps()
           }

           {/* use one condtion and state */}
           {
            this.state.count===0&&"HEEEEEEEEEEEELO NO Steps "
           }
            <div >
                <div className="card flex justify-content-center">
                <button  className={colorB} onClick={this.hc}>
                Incremanet
            </button>  <button  className={"btn btn-info"} onClick={this.dc}>
                DEcremanet
            </button>


                </div >

        </div>
             </div>
        
        </div>
            
         );
    }


    showListSteps(){
        if(this.state.count===0) return <h4>No Steps ;)</h4>
        return   <ui>
        {
            this.state.steps.map(
                s=><li key={s}>{s}</li>
            )
        }
    </ui>
    }
}
 
export default Tag;

        