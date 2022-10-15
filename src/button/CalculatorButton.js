import React, { Component } from "react";
import Button from '@mui/material/Button';

class CalculatorButton extends Component {

    bindOffer = (buttonDisplayName) => {
        const { setEquation } = this.props

        if (setEquation !== undefined) {
            setEquation(buttonDisplayName)
        }
    }

    render() {
        return (
            <Button
                variant="contained"
                color={this.props.colorCode}
                size="small"
                onClick={ () => this.bindOffer(this.props.buttonDisplayName) }
            >
                {this.props.buttonDisplayName}
            </Button>
        )   
    }
}

export default CalculatorButton;