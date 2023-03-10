import axios from 'axios'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Header from './Header';
import headerGif from '../video/food-24999.mp4';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import imageTitle from '../images/title.png';
import {  Link } from "react-router-dom";
import '../css/home.css';
import Articlecard from './Articlecard';

function Home(props)
{
    // const[articles,setArticles]=useState([]);
    // const[ArticleThumbnail,setArticleThumbnail]=useState([]);
    async function getArticles()
    {
        const articles = (await axios.get('http://127.0.0.1:8000/api/articles')).data
        // setArticles(articles)
    }

    useEffect(() => { // this is a hook called everytime the function is rendered again
        // Don't forget to import useEffect
getArticles()
}, []);

  
return (

      
      <div className='common'>
      {/* <Header /> */}
       <div className="header-container">
        
        <span className="title-banner"><img src={imageTitle} alt="Let's eat!" /></span>
        <video autoPlay loop muted>
            <source src={headerGif} type="video/mp4"/>
        </video>
        </div>
                  
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Let's Eat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Main Dishes</Nav.Link>
            <Nav.Link href="#link">Desserts</Nav.Link>
            <Nav.Link href="#link">Drinks</Nav.Link>
            <Nav.Link href="#link">Appetizers</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Link to="/add" className="add">ADD</Link>
      <Articlecard/>
    </Navbar>
    </div>
  );
}
export default Home;









