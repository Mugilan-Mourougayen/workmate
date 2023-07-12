
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link,redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import BgImage from "../assets/img/illustrations/signin.svg";
import { adddetails } from "../features/detailsSlice";






const Signin = () => {

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const details = useSelector((state)=>state.details.value)
  const navigate = useNavigate();

  // const token = useSelector((state)=>
  const dispatch = useDispatch()
  const signin =async(e)=>{
    e.preventDefault()
      console.log(email,password);
      let data = {email:email,
                  password:password}
                  try {
                    const response = await fetch("http://localhost:5000/user/signin", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    });
                  
                    if (!response.ok) {
                      throw new Error(response.status);
                    }
                  
                    const result = await response.json();
                    console.log("Success:", result);
                    window.localStorage.setItem("token", result.token);
                    // return redirect("/main")
                    return navigate("/main");
                  } catch (error) {
                    console.error("Error:", error);
                  }
  }

  return (
    <div>
        
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
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  {/* <h3 className="mb-0">Sign in to our platform{token}</h3> */}
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control  required type="email" placeholder="example@company.com"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control required type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                      </InputGroup>
                    </Form.Group>
                    {/* <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                      </Form.Check>
                      <Card.Link className="small text-end">Lost password?</Card.Link>
                    </div> */}
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100" onClick={(e)=>signin(e)}>
                    Sign in
                  </Button>
                </Form>
               
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link  className="fw-bold">
                    <Link to="/signup">
                      {` Create account `}
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

    </div>
  )
}

export default Signin























