

import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from './Header';

import LinkInClass from "./LinkInClass";

import "../css/register.css";


function Register() {
    const [name, setName] = useState("");
    const [Username,setUsername]=useState("");
    const [password, setPassword] = useState("");
    // const [confirmpassword, setconfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
        } else if (e.target.name === "Username") {
            setUsername(e.target.value);
        } 
        else if (e.target.name === "password") {
          setPassword(e.target.value);
      } 
    //   else if (e.target.name === "confirmpassword") {
    //     setconfirmPassword(e.target.value);
    // } 
    else {
            setEmail(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(`http://127.0.0.1:8000/api/register`, { name,Username, password, email })
            .then((res) => {
                console.log(res);
                setRedirect(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <Container className="my-5">
            <Header/>
            {/* {Header} */}
            <Row className="content">
                <Col md={6}>
                <h3 className="mb-4 title">Register</h3>
                    <Form onSubmit={handleSubmit} className="p-4">
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="name"
                                value={name}
                                onChange={handleChange}
                                autoComplete="off"
                                className="rounded-pill border-dark border-2 my-2"
                            />

                            
                        </Form.Group>

                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                name="username"
                                placeholder="username"
                                value={Username}
                                onChange={handleChange}
                                autoComplete="off"
                                className="rounded-pill border-dark border-2 my-2"
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="email"
                                value={email}
                                onChange={handleChange}
                                autoComplete="off"
                                className="rounded-pill border-dark border-2 my-2"
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="password"
                                value={password}
                                onChange={handleChange}
                                autoComplete="off"
                                className="rounded-pill border-dark border-2 my-2"
                            />
                        </Form.Group>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                placeholder="confirm password"
                                value={password}
                                onChange={handleChange}
                                autoComplete="off"
                                className="rounded-pill border-dark border-2 my-2"
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-around">
                            <Button
                                type="submit"
                                className="px-5 py-2"
                                variant="dark"
                            >
                               Sign Up
                            </Button>
                        </div>
                    </Form>
                    <p className="mt-4 text-center">
                        Already user? <Link to="/login" className="ChangeSign"> Sign In</Link>
                        {/* <LinkInClass to="/login">Sign In</LinkInClass> */}
                    </p>
                    <Link
                       to="/"
                       className="px-5 py-2 rounded"
                    >
                        Back
                    </Link>
                </Col>

            </Row>
            {redirect && <Navigate to="/login" />}
        </Container>
    );
}

export default Register;