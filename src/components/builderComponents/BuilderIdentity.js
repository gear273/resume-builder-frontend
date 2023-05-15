import React from "react";
import { Container, Nav, Navbar, Stack, Image, ListGroup, ListGroupItem, Card, Row, Col, Form } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function BuilderIdentity(props) {
  /*
  "identity": {
    "first" : "",
    "last" : "",
    "address" : "",
    "title",
    "phone" : "",
    "email" : "",
    "portfoliosite" : "",
    "linkedin" : ""
  } */

  let identityState = props.identity
  //on field update, update state?
  
  function identityInfo(title){
    return <Card.Body>
        <Form.Group as={Row} className="mb-3" >
          <Col><Form.Text  sm={2}>{title}</Form.Text></Col>
          <Col sm={8}>
            <Form.Control name={title}/>
          </Col>
        </Form.Group>
    </Card.Body>
  }

    return (
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Form onChange={e=>props.updateIdentity(e)} >
                  <Form.Group as={Row} className="mb-3" >
                    <Col><Form.Text  sm={2}>{"First Name"}</Form.Text></Col>
                    <Col sm={8}>
                      <Form.Control name="first" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" >
                    <Col><Form.Text  sm={2}>{"Last Name"}</Form.Text></Col>
                    <Col sm={8}>
                      <Form.Control name="last"/>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" >
                    <Col><Form.Text  sm={2}>{"Title"}</Form.Text></Col>
                    <Col sm={8}>
                      <Form.Control name="title"/>
                    </Col>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Form onChange={e=>props.updateIdentity(e)}><Card>{identityInfo("Address")}</Card>
            <Card>{identityInfo("Phone")}</Card>
            <Card>{identityInfo("Email")}</Card>
            <Card>{identityInfo("LinkedIn")}</Card></Form>
          </Col>
        </Row>
    )
}

export default BuilderIdentity;

/**
 <ListGroup>
            <ListGroupItem>{identityInfo("Address")}</ListGroupItem>
            <ListGroupItem>{identityInfo("Phone")}</ListGroupItem>
            <ListGroupItem>{identityInfo("Email")}</ListGroupItem>
            <ListGroupItem>{identityInfo("LinkedIn")}</ListGroupItem>
          </ListGroup>
 */