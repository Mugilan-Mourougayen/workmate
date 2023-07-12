import { useRef } from "react";
import "./Section.css";
import ScrollToTop from "./ScrollToTop";
import workersimg from "./workersimg.png"
import {  Button  } from '@themesberg/react-bootstrap';
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const services = useRef(null);
  const blog = useRef(null);
  
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  

  return (
    <div className="App">
      <ScrollToTop />
      <div className="hero">
        <ul>
          <li onClick={() => scrollToSection(services)} className="link">
            Customer
          </li>
          <li onClick={() => scrollToSection(blog)} className="link">
            Job Seeker
          </li>
          <li onClick={() => scrollToSection(contact)} className="link">
            Vendor
          </li>

          <li className="link">
          <Button onClick={()=>navigate("/signup")}> Signup</Button>
          </li>
          <li className="link">
          <Button onClick={()=>navigate("/signin")}> Signin</Button>
          </li>
        </ul>
      </div>
      <div className="main" id="container">
      
        {/* <div className="leftflex"> 
          <img src={workersimg} alt="worker" className="image"/>
        </div>
        <div className="rightflex">
        <h3>Vendor</h3>
        </div> */}
<h3 className="title">WorkMate</h3>
      </div>
      <div ref={services} className="slide" id="container">
      
        <div className="leftflex"> 
          <img src={workersimg} alt="worker" className="image"/>
        </div>
        <div className="rightflex">
        <h3>Vendor</h3>
        </div>

      </div>
      <div ref={blog} className="slide" id="container">
      <div className="leftflex">
          <img src={workersimg} alt="worker" className="image"/>
        </div>
        <div className="rightflex">
        <h3>Vendor</h3>
        </div>


      </div>
      <div ref={contact} className="slide" id="container">
        <div className="leftflex">
          <img src={workersimg} alt="worker" className="image"/>
        </div>
        <div className="rightflex">
        <h3>Vendor</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;






// Workers: Discover job opportunities that align with your expertise and unlock your earning potential.
// Users: Delegate tasks to reliable workers and experience seamless project completion at your convenience.
// Vendors: Maximize your business by selling and renting essential equipment to support various job requirements efficiently.