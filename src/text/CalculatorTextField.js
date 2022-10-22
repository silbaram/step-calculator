import React, { Component } from "react";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

class CalculatorTextField extends Component {

    render() {
        return (
            <Container maxWidth="sm">
                <TextField 
                    fullWidth
                    color="info"
                    id="calculatorText"
                    value={this.props.displayNumber}
                />
            </Container>
        )
    }
}

export default CalculatorTextField;