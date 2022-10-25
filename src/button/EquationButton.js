import React, { Component } from "react";
import Button from '@mui/material/Button';

class EquationButton extends Component {

    bindOffer = (buttonDisplayName) => {
        const { setEquation } = this.props
        setEquation(buttonDisplayName)
    }

    render() {
        return (
            <Button
                style={{
                    backgroundColor: this.props.colorCode,
                }}
                variant="contained"
                // color={ this.props.colorCode }
                size="small"
                onClick={ () => this.bindOffer(this.props.buttonDisplayName) }
            >
                {this.props.buttonDisplayName}
            </Button>
        )   
    }
}

export default EquationButton