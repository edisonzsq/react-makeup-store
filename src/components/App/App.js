import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from '../NavBar/NavBar';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
// import SearchResultDisplay from '../SearchResultDisplay/SearchResultDisplay';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ItemSearchForm from '../ItemSearchForm/ItemSearchForm';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Route, Link } from "react-router-dom";
import FoundationDisplay from '../FoundationDisplay/FoundationDisplay';
import SearchResultDisplay from '../SearchResultDisplay/SearchResultDisplay';

function App() {
  
  const [cat, setCat] = useState("name");
  const [searchResultSrc, setSearchResultSrc] = useState([])

  const makeSearchableAPICall = async (val) => {
    const makeupUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?${cat}=${val}`
    console.log(makeupUrl);
    const result = await fetch(makeupUrl)
    const json = await result.json();
    console.log(json);
    setSearchResultSrc(json);
}

const handleSubmitFromChild = (val) => {
    console.log('This is from parent:' + val);
    makeSearchableAPICall(val);
    // Here we receive "val"
    // We want to make API call that will fetch search results
}

  return (
    <div>
      <nav>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
          <Navbar.Brand>
            Color Me Pretty
          </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <OverlayTrigger
            rootClose="false"
            rootCloseEvent="click"
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Body>
                  <Link to="/foundation">
                    <strong>Foundation</strong>
                  </Link>
                <br/>
                <strong>Blusher</strong>
                <br/>
                <strong>Bronzer</strong>
                </Popover.Body>
              </Popover>
            }>
              <Link to="/foundation">
              <Nav.Link>
                Face
              </Nav.Link>
              </Link>
            </OverlayTrigger>
            <OverlayTrigger
            rootClose="false"
            rootCloseEvent="click"
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Body>
                <strong>Eyeshadow</strong>
                <br/>
                <strong>Eyebrow</strong>
                <br/>
                <strong>Eyeliner</strong>
                </Popover.Body>
              </Popover>
            }>
              <Nav.Link>Eyes</Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
            rootClose="false"
            rootCloseEvent="click"
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Body>
                <strong>Lipstick</strong>
                <br/>
                <strong>Lipliner</strong>
                </Popover.Body>
              </Popover>
            }>
              <Nav.Link>Lips</Nav.Link>
            </OverlayTrigger>
          </Nav>
          <ItemSearchForm setCategory={setCat} onHandleSubmit={handleSubmitFromChild}/>
        </Container>
      </Navbar>
      </nav>
      <br/>
      <br/>
      <br/>
      <main>
      <SearchResultDisplay resultSrc={searchResultSrc}/>
        {/* <FoundationDisplay /> */}
        <Route exact path="/">
          <HomeCarousel/>
        </Route>
        <Route path="/foundation">
          <FoundationDisplay />
        </Route>
        {/* <Route path="/searchresults">
          <ItemSearchForm resultSrc={searchResultSrc}/>
        </Route> */}
      </main>
    </div>
  );
}

export default App;
