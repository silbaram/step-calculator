import React, { Component } from "react";
import Button from '@mui/material/Button';

class DecimalPointButton extends Component {

    setDecimalPointValue = () => {
        const { setDecimalPointValue } = this.props
        setDecimalPointValue()
    }

    render() {
        return (
            <Button
                variant="contained"
                color={this.props.colorCode}
                size="small"
                onClick={ () => this.setDecimalPointValue() }
            >
                {this.props.buttonDisplayName}
            </Button>
        )
    }
}

export default DecimalPointButton