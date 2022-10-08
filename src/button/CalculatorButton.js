import React from "react";
import Button from 'react-bootstrap/Button'

class CalculatorButton extends React.Component {
    render() {
        return (
            <Button variant="light">
                {this.props.displayName}
            </Button>
        )
    }
}

export default CalculatorButton