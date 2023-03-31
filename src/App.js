import './App.css';
import GetMyUsers from './componts/callApi';
import Login from './componts/login';
import NavBar from './componts/nav';
import Page1 from './componts/pages/home/p1';
import Page2 from './componts/pages/aboutUs/p2';
import Page3 from './componts/pages/p3';
import Page4 from './componts/pages/p4';
import SysUsers from './componts/sysUsers';
import Test from './componts/test';
import Tag from './componts/test2';
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    {/* <Login/>   */}
    {/* <Test/> */}
    {/* <Tag></Tag> */}
    {/* <SysUsers /> */}
    {/* <GetMyUsers/> */}
    {/* <Page1></Page1>
    <Page2></Page2>
    <Page3></Page3>
    <Page4></Page4> */}
      
      <NavBar></NavBar>
      <Routes>  
          <Route index element={<Page1 />} />
          <Route path="Page2" element={<Page2 />} />
          <Route path="Page3" element={<Page3 />} />
          <Route path="Page4" element={<GetMyUsers />} />
          <Route path="*" element={<Page1 />} />    
      </Routes>
    </div>
  );
}


export default App;
