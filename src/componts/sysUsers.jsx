import React ,{Component} from "react";
import { GetUsers } from "./api/testApi";

class SysUsers extends Component {
    constructor(props) {
        super(props);
        
    }
    state = { 
        users:GetUsers()
     }

     handelDelete(id){

     const users1 =  this.state.users.filter((user)=>{
        return user.id!==id;
       })

     this.setState(
        {
            users:users1
        }
     )
     console.log(id)
     }
    render() { 
        return ( <>
           {/* table.table>thead>tr>th*4 */}
           
           <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>website</th>
                </tr>
            </thead>

            <tbody>
            {
            this.state.users.map(
                user=>
                
                <tr key={user.id}>
            <th scope="row">{user.id}</th>

                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td><button className='btn btn-danger' onClick={()=>this.handelDelete(user.id)} >Delete </button></td>
                </tr>
                
            )
         }
            
       
            </tbody>
        </table>
        
        </> );
    }
}
 



export default SysUsers;