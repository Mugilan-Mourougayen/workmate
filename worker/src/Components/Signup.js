
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt,faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import BgImage from "../assets/img/illustrations/signin.svg";
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useNavigate } from "react-router-dom";



const Signup = () => {
    const [email,setEmail]=useState();
    const [name,setName]=useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const [role, setRole] = React.useState();
    const navigate = useNavigate();


    const handleChangerole = (event, newrole) => {
      setRole(newrole);
    };

    

    const signup =async()=>{
        console.log(email,password,confirmPassword);
        let data = {email:email,
                    password:password,
                    name:name,
                    confirmPassword:confirmPassword,
                    role:role
                  }
        try {
            const response = await fetch("http://localhost:5000/worker/signup", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
        
            const result = await response.json();
            console.log("Success:", result);
            return navigate("/main");
          } catch (error) {
            console.error("Error:", error);
          }
    }
    return (
        <main>
          <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
            <Container>
              <p className="text-center">
                <Card.Link   className="text-gray-700">
                  <Link to="/">
                  <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
                  </Link>
                </Card.Link>
              </p>
              <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
                <Col xs={12} className="d-flex align-items-center justify-content-center">
                  <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                    <div className="text-center text-md-center mb-4 mt-md-0">
                      <h3 className="mb-0">Create an account</h3>
                    </div>
                    <Form className="mt-4">
                      <Form.Group id="email" className="mb-4">
                        <Form.Label>Your Email<span className="text-danger"> *</span></Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faEnvelope} />
                          </InputGroup.Text>
                          <Form.Control autoFocus required type="email" placeholder="example@company.com"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </InputGroup>
                      </Form.Group>
                      <Form.Group id="name" className="mb-4">
                        <Form.Label>Your Name<span className="text-danger"> *</span></Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUser} />
                          </InputGroup.Text>
                          <Form.Control autoFocus required type="text" placeholder="Jack"  value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        </InputGroup>
                      </Form.Group>
                      <Form.Group id="password" className="mb-4">
                        <Form.Label>Your Password<span className="text-danger"> *</span></Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUnlockAlt} />
                          </InputGroup.Text>
                          <Form.Control required type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        </InputGroup>
                      </Form.Group>
                      <Form.Group id="confirmPassword" className="mb-4">
                        <Form.Label>Confirm Password<span className="text-danger"> *</span></Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUnlockAlt} />
                          </InputGroup.Text>
                          <Form.Control required type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
                        </InputGroup>
                      </Form.Group>
<Form.Group>
<Form.Label>Are you vendor or worker<span className="text-danger"> *</span></Form.Label>
<InputGroup style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
                      <ToggleButtonGroup
      color="primary"
      value={role}
      exclusive
      onChange={handleChangerole}
      aria-label="Platform"
      >
      <ToggleButton value="vendor"><LocalGroceryStoreIcon/></ToggleButton>
      <ToggleButton value="worker"><EngineeringIcon/></ToggleButton>

    </ToggleButtonGroup>
        </InputGroup>
    </Form.Group>
    <br/>
                      {/* <FormCheck type="checkbox" className="d-flex mb-4">
                        <FormCheck.Input required id="terms" className="me-2" />
                        <FormCheck.Label htmlFor="terms">
                          I agree to the <Card.Link>terms and conditions</Card.Link>
                        </FormCheck.Label>
                      </FormCheck> */}
    
                      <Button variant="primary" type="submit" className="w-100"  onClick={signup}>
                        Sign up
                      </Button>
                    </Form>
    
                    {/* <div className="mt-3 mb-4 text-center">
                      <span className="fw-normal">or</span>
                    </div> */}
                    {/* <div className="d-flex justify-content-center my-4">
                      <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Button>
                      <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Button>
                      <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                        <FontAwesomeIcon icon={faGithub} />
                      </Button>
                    </div> */}
                    <div className="d-flex justify-content-center align-items-center mt-4">
                      <span className="fw-normal">
                        Already have an account?
                        <Card.Link  className="fw-bold">
                          <Link to="/signin">
                          {` Login here `}
                          </Link>
                        </Card.Link>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      );
}

export default Signup



