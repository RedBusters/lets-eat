// import React, { useState } from "react";
// import { Navigate, Link } from "react-router-dom";
// import axios from "axios";
// // import { Container, Row, Col, Form, Button } from "react-bootstrap";

// import LinkInClass from "./LinkInClass";

// import "../css/LogIn.css";

// function LogIn() {
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
// const [redirect, setRedirect] = useState(false)

// const handleUsernameChange = (event) => {
// setUsername(event.target.value);
// };

// const handlePasswordChange = (event) => {
// setPassword(event.target.value);
// };

// const handleSubmit = (event) => {
// event.preventDefault();
// axios
//             .post(`http://127.0.0.1:8000/api/logIn`, {username, password})
//             .then((res) => {
//                 console.log(res);
//                 setRedirect(true);
//             })
//             .catch((err) => console.log(err));
//     };
// // console.log('Login form submitted:', username, password);
// // };

// return (
// <div>
//     <h1>Let's eat</h1>

// <form onSubmit={handleSubmit}>
// <label>
// Username:
// <input type="text" value={username} onChange={handleUsernameChange} placeholder='username' />
// </label>
// <br />
// <label>
// Password:
// <input type="password" value={password} onChange={handlePasswordChange} placeholder='password' />
// </label>
// <br />
// <button type="submit">Sign In</button>
// </form>
// <p className="mt-4 text-center">
//                         New user?{" "}
//                         <LinkInClass to="/register">Sign Up</LinkInClass>
//                     </p>
// </div>
// )}
// export default LogIn;





import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login({ cookies, setCookie }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(`http://127.0.0.1:8000/api/login`, { username, password })
            .then((res) => {
                console.log(res);
                setCookie("mycookie", { name: res.data.name, token: res.data.access_token, username: res.data.username , userId: res.data.userId}, { path: "/" });
              window.location.replace("/");
            })
            .catch((err) => console.log(err));
    };

        if(redirect) {
        //make the page relaod then redirect to home page
        return <Navigate to="/" />;
    }

    return (
        <Container className="my-5">
            <h1 className="text-center mb-5">Let's Eat</h1>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h3 className="mb-4 text-center">Login</h3>
                    <Form onSubmit={handleSubmit} className="p-4">
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                name="username"
                                placeholder="username"
                                value={username}
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
                                placeholder="Password"
                                value={password}
                                onChange={handleChange}
                                autoComplete="off"
                                className="rounded-pill border-dark border-2 my-2"
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-around">
                            <Link
                                to="/"
                                className="px-5 py-2 rounded"
                                style={{
                                    backgroundColor: "#212529",
                                    color: "#FAF2E6",
                                    border: "2px solid black",
                                    textDecoration: "none",
                                    marginTop: "1rem",
                                }}
                            >
                                Back
                            </Link>
                            <Button
                                type="submit"
                                className="px-5 py-2"
                                variant="dark"
                                style={{ color: " rgba(241,100,5,1)", marginTop: "1rem" }}
                            >
                                Login
                            </Button>
                        </div>
                    </Form>
                    <p className="mt-4 text-center">
                        Don't have an account?{" "}
                        <Link to="/register" className="link-in-class">
                            Sign Up
                        </Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;