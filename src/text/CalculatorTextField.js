import React from "react";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

class CalculatorTextField extends React.Component {

    render() {
        return (
            <Container maxWidth="sm">
                <TextField 
                    fullWidth
                    id="calculatorText"
                    variant="standard"
                />
            </Container>
        )
    }
}

export default CalculatorTextField;