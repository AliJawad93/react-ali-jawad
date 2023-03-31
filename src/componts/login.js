import '../styles/login.css';
import loginImg from '../images/login_img.png';
const Login =()=>{
    return (
        <div className="box">

        <div className="LoginCard">
         <div className="FormCard">
   
           <h3 id='loginName'>LOGIN</h3>
                   <input type="text" id="Email" name="Email" placeholder="Email"/>
                   
                   <br></br>
                   
                   <input type="password" id="Password" name="Password" placeholder="Password"/>
                   
                   <br></br>
                   
                   <label id="remamberMe">
                   <input type="checkbox" checked=""/>
                     Remamber me
                   </label>
   
                   <br></br>
                   <input type="submit" value="Login"/>
                   <div>
                   ---  OR ---
                   </div>
                   <img src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" width={30} className="socialMedia"/>
                   <img src="https://cdn-icons-png.flaticon.com/512/4494/4494475.png" width={30} className="socialMedia"/>
                   <img src="https://cdn-icons-png.flaticon.com/512/4494/4494497.png" width={30} className="socialMedia"/>
                   <img src="https://cdn-icons-png.flaticon.com/512/4494/4494477.png" width={30} className="socialMedia"/>
             
                   
                   </div>
   
          <div className="imgLoginCard">
           <img src={loginImg} alt="login image" height="600"/>
          </div>
        
        </div>
    
   </div>
    );
}

export default Login;