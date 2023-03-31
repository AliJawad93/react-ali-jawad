import { Outlet, Link } from "react-router-dom";
import './nav.css'
const NavBar = () => {
  const divStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px'
  };
  return (
    <>
    
    <nav className="navbar navbar-expand-lg fixed-top nav-bar navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand zoom-in-out" href="#">Bentilzone</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item zoom-in-out ">
          <Link to="/Page1" className="nav-link">Home</Link>
        </li>
        <li className="nav-item zoom-in-out ">
        <Link to="/Page2" className="nav-link">Menu</Link>

        </li>
        <li className="nav-item zoom-in-out ">
        <Link to="/Page3" className="nav-link">Services</Link>

        </li>
        <li className="nav-item zoom-in-out ">
        <Link to="/Page4" className="nav-link">Contact us</Link>
        
        </li>
        <li className="nav-item zoom-in-out ">
        <Link to="/Page1" className="nav-link">Contact us</Link>
        
        </li>
    
      </ul>
      <button type="button" className="btn-outline zoom-in-out">Login</button>
    </div>
  </div>
</nav>



    </>
  )
};

export default NavBar;