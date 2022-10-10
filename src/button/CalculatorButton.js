import React from "react";
import Button from '@mui/material/Button';

class CalculatorButton extends React.Component {

    render() {
        return (
            <Button>{this.props.buttonDisplayName}</Button>
        )   
    }
}

export default CalculatorButton;