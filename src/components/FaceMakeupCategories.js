import React from 'react';

function FaceMakeupCategories() {



    return (
      <Container fluid="true">
        <Row>
          <Col>
              <Card className="category-card">
                  <Card.Img 
                  variant="bottom" 
                  src={require("../images/blusher.jpg")}
                  width="400"
                  height="400" />
              </Card>
          </Col>
          <Col>
              <Card className="category-card">
                  <Card.Img 
                  variant="bottom" 
                  src={require("../images/eyeshadow.jpg")}
                  width="400" 
                  height="400"/>
              </Card>
          </Col>
          <Col>
              <Card className="category-card">
                  <Card.Img 
                  variant="bottom" 
                  src={require("../images/lipstick.jpg")}
                  width="400"
                  height="400" />
              </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default FaceMakeupDisplay;