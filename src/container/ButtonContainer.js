import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CalculatorButton from "../button/CalculatorButton"

class ButtonContaier extends React.Component {

    render() {
        return (
            <Container maxWidth="sm">
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <CalculatorButton buttonDisplayName="1" colorCode="success" />
                    <CalculatorButton buttonDisplayName="2" colorCode="success" />
                    <CalculatorButton buttonDisplayName="3" colorCode="success" />
                    <CalculatorButton buttonDisplayName="3" colorCode="success" />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <CalculatorButton buttonDisplayName="4" colorCode="success" />
                    <CalculatorButton buttonDisplayName="5" colorCode="success" />
                    <CalculatorButton buttonDisplayName="6" colorCode="success" />
                    <CalculatorButton buttonDisplayName="6" colorCode="success" />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <CalculatorButton buttonDisplayName="7" colorCode="success" />
                    <CalculatorButton buttonDisplayName="8" colorCode="success" />
                    <CalculatorButton buttonDisplayName="9" colorCode="success" />
                    <CalculatorButton buttonDisplayName="9" colorCode="success" />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <CalculatorButton buttonDisplayName="7" colorCode="success" />
                    <CalculatorButton buttonDisplayName="8" colorCode="success" />
                    <CalculatorButton buttonDisplayName="9" colorCode="success" />
                    <CalculatorButton buttonDisplayName="9" colorCode="success" />
                </Box>
            </Container>
        )
    }
}

export default ButtonContaier