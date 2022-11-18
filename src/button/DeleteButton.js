import React, { Component } from "react";
import Button from '@mui/material/Button';

class CalculatorButton extends Component {

    setDeleteNumberValue = () => {
        const { setDeleteNumberValue } = this.props
        setDeleteNumberValue()
    }

    render() {
        return (
            <Button
                variant="contained"
                color={this.props.colorCode}
                size="small"
                onClick={ () => this.setDeleteNumberValue() }
            >
                {this.props.buttonDisplayName}
            </Button>
        )   
    }
}

export default CalculatorButton;