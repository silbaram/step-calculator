import React, { Component } from "react";
import Button from '@mui/material/Button';

class CalculatorButton extends Component {

    setCalculate = () => {
        const { setValueInitialization } = this.props
        setValueInitialization()
    }

    render() {
        return (
            <Button
                variant="contained"
                color={this.props.colorCode}
                size="small"
                onClick={ () => this.setCalculate() }
            >
                {this.props.buttonDisplayName}
            </Button>
        )   
    }
}

export default CalculatorButton;