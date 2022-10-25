import React, { Component } from "react";
import Button from '@mui/material/Button';

class NumberButton extends Component {

    bindOffer = (buttonDisplayName) => {
        const { setNumber } = this.props
        setNumber(buttonDisplayName)
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

export default NumberButton