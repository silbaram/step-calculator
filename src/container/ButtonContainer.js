import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CalculatorButton from "../button/CalculatorButton"

class ButtonContaier extends React.Component {

    render() {
        return (
            <Container maxWidth="sm">
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                    <CalculatorButton buttonDisplayName="1" />
                    <CalculatorButton buttonDisplayName="2" />
                    <CalculatorButton buttonDisplayName="3" />
                    <CalculatorButton buttonDisplayName="3" />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                    <CalculatorButton buttonDisplayName="4" />
                    <CalculatorButton buttonDisplayName="5" />
                    <CalculatorButton buttonDisplayName="6" />
                    <CalculatorButton buttonDisplayName="6" />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                    <CalculatorButton buttonDisplayName="7" />
                    <CalculatorButton buttonDisplayName="8" />
                    <CalculatorButton buttonDisplayName="9" />
                    <CalculatorButton buttonDisplayName="9" />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                    <CalculatorButton buttonDisplayName="7" />
                    <CalculatorButton buttonDisplayName="8" />
                    <CalculatorButton buttonDisplayName="9" />
                    <CalculatorButton buttonDisplayName="9" />
                </Box>
            </Container>
        )
    }
}

export default ButtonContaier