import React, { Component } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CalculatorButton from "../button/CalculatorButton"

class ButtonContaier extends Component {

    setEquation = equation => {
        const { setPresentCalculationEquation } = this.props
        setPresentCalculationEquation(equation)
    }

    setNumber = number => {
        const { setPresentCalculationNumber } = this.props
        setPresentCalculationNumber(number)
    }

    render() {
        return (
            <Container maxWidth="sm">
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <CalculatorButton buttonDisplayName="AC" colorCode="success" />
                    <CalculatorButton buttonDisplayName="%" colorCode="success" setEquation={this.setEquation} />
                    <CalculatorButton buttonDisplayName="/" colorCode="success" setEquation={this.setEquation} />
                    <CalculatorButton buttonDisplayName="Del" colorCode="success" />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <CalculatorButton buttonDisplayName="7" colorCode="success" setNumber={this.setNumber} />
                    <CalculatorButton buttonDisplayName="8" colorCode="success" setNumber={this.setNumber} />
                    <CalculatorButton buttonDisplayName="9" colorCode="success" setNumber={this.setNumber} />
                    <CalculatorButton buttonDisplayName="*" colorCode="success" setEquation={this.setEquation} />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <CalculatorButton buttonDisplayName="4" colorCode="success" setNumber={this.setNumber} />
                    <CalculatorButton buttonDisplayName="5" colorCode="success" setNumber={this.setNumber} />
                    <CalculatorButton buttonDisplayName="6" colorCode="success" setNumber={this.setNumber} />
                    <CalculatorButton buttonDisplayName="-" colorCode="success" setEquation={this.setEquation} />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <CalculatorButton buttonDisplayName="1" colorCode="success" setNumber={this.setNumber} />
                    <CalculatorButton buttonDisplayName="2" colorCode="success" setNumber={this.setNumber} />
                    <CalculatorButton buttonDisplayName="3" colorCode="success" setNumber={this.setNumber} />
                    <CalculatorButton buttonDisplayName="+" colorCode="success" setEquation={this.setEquation} />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <CalculatorButton buttonDisplayName="+/-" colorCode="success" />
                    <CalculatorButton buttonDisplayName="0" colorCode="success" setNumber={this.setNumber} />
                    <CalculatorButton buttonDisplayName="." colorCode="success" />
                    <CalculatorButton buttonDisplayName="=" colorCode="success" />
                </Box>
            </Container>
        )
    }
}

export default ButtonContaier