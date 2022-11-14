import React, { Component } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import NumberButton from "../button/NumberButton"
import EquationButton from "../button/EquationButton"
import CalculatorButton from "../button/CalculatorButton"

class ButtonContaier extends Component {

    choiceEquation = undefined
    setEquation = equation => {
        const { setPresentCalculationEquation } = this.props
        let inputNumberPostion = setPresentCalculationEquation(equation)

        if (inputNumberPostion === 'RIGHT') {
            this.choiceEquation = equation
        }
    }

    setNumber = number => {
        const { setPresentCalculationNumber } = this.props
        setPresentCalculationNumber(number)
    }

    setCalculate = () => {
        const { calculate } = this.props
        calculate()
    }


    buttonColor = (equation) => {
        if (this.choiceEquation === equation) {
            return "#21b6ae"    
        }
        return "#2e7d32"
    }

    render() {
        return (
            <Container maxWidth="sm">
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <CalculatorButton buttonDisplayName="AC" colorCode="success" />
                    <EquationButton buttonDisplayName="%" colorCode={ this.buttonColor("%") } setEquation={this.setEquation} />
                    <EquationButton buttonDisplayName="/" colorCode={ this.buttonColor("/") } setEquation={this.setEquation} />
                    <CalculatorButton buttonDisplayName="Del" colorCode="success" />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <NumberButton buttonDisplayName="7" colorCode="success" setNumber={this.setNumber} />
                    <NumberButton buttonDisplayName="8" colorCode="success" setNumber={this.setNumber} />
                    <NumberButton buttonDisplayName="9" colorCode="success" setNumber={this.setNumber} />
                    <EquationButton buttonDisplayName="*" colorCode={ this.buttonColor("*") } setEquation={this.setEquation} />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <NumberButton buttonDisplayName="4" colorCode="success" setNumber={this.setNumber} />
                    <NumberButton buttonDisplayName="5" colorCode="success" setNumber={this.setNumber} />
                    <NumberButton buttonDisplayName="6" colorCode="success" setNumber={this.setNumber} />
                    <EquationButton buttonDisplayName="-" colorCode={ this.buttonColor("-") } setEquation={this.setEquation} />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <NumberButton buttonDisplayName="1" colorCode="success" setNumber={this.setNumber} />
                    <NumberButton buttonDisplayName="2" colorCode="success" setNumber={this.setNumber} />
                    <NumberButton buttonDisplayName="3" colorCode="success" setNumber={this.setNumber} />
                    <EquationButton buttonDisplayName="+" colorCode={ this.buttonColor("+") } setEquation={this.setEquation} />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <CalculatorButton buttonDisplayName="+/-" colorCode="success" />
                    <NumberButton buttonDisplayName="0" colorCode="success" setNumber={this.setNumber} />
                    <CalculatorButton buttonDisplayName="." colorCode="success" />
                    <CalculatorButton buttonDisplayName="=" colorCode="success" setCalculate={this.setCalculate} />
                </Box>
            </Container>
        )
    }
}

export default ButtonContaier