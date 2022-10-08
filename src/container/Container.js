import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalculatorButton from "../button/CalculatorButton";

class Contaier extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col>0</Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <CalculatorButton displayName="AC" />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="+/-" />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="%" />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="/" />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <CalculatorButton displayName="7" />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="8" />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="9" />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="*" />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <CalculatorButton displayName="4" />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="5" />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="6" />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="-" />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <CalculatorButton displayName="1" />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="2" />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="3" />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="+" />
                    </Col>
                    <Row className="justify-content-md-center">
                    <Col>
                        <CalculatorButton displayName="0" />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="." />
                    </Col>
                    <Col>
                        <CalculatorButton displayName="=" />
                    </Col>
                </Row>
                </Row>
            </Container>
        )
    }
}

export default Contaier