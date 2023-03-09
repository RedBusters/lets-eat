import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";

// import LinkInClass from "./Components/LinkInClass";

import "../css/LogIn.css";

function LogIn() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [redirect, setRedirect] = useState(false)

const handleUsernameChange = (event) => {
setUsername(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
axios
            .post(`http://127.0.0.1:8000/api/logIn`, {username, password})
            .then((res) => {
                console.log(res);
                setRedirect(true);
            })
            .catch((err) => console.log(err));
    };
// console.log('Login form submitted:', username, password);
// };

return (
<div>
    <h1>Let's eat</h1>
<h1>Sign In</h1>
<form onSubmit={handleSubmit}>
<label>
Username:
<input type="text" value={username} onChange={handleUsernameChange} />
</label>
<br />
<label>
Password:
<input type="password" value={password} onChange={handlePasswordChange} />
</label>
<br />
<button type="submit">Sign In</button>
</form>
</div>
)}
export default LogIn;