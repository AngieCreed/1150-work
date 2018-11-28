import React from 'react';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container, Row, Col, Button } from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        <Container className="main">
            <Row>
                <Col xs="12">
                    <h1>Functional Component</h1>
                    <p>Functional components allow you to render information to the web page without having to use or change state.</p>
                    <dl>
                        <dt>Presentational</dt>
                        <dd>Often used for simply rendering a small chunk of code to the dom.</dd>
                        <dt>No 'this' keyword</dt>
                        <dd>Unlike class components, functional ones don't use 'this'.</dd>
                        <dt>No state</dt>
                        <dd>These are 'dumb' components for UI.</dd>
                        <dt>return()</dt>
                        <dd>Must return a single element.</dd>
                    </dl>
                </Col>
            </Row>

            <hr />
            <Row>
                <Col md="6">
                    <HelloWorldFatArrow className="logo" />
                </Col>
                <Col md="6">
                    <HelloWorld />
                </Col>
            </Row>
        </Container>
    );
};

export default FunctionalComponentDemo;

const HelloWorld = function () {
    return (
        <div>
            <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                     <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                     <Button>Button</Button>
                 </CardBody>
            </Card> 
        </div>
    )
};

const HelloWorldFatArrow = () => 
    <div>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    </div>