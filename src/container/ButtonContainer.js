import React, { Component } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import NumberButton from "../button/NumberButton"
import EquationButton from "../button/EquationButton"
import CalculatorButton from "../button/CalculatorButton"
import Initialization from "../button/InitializationButton"
import DeleteButton from "../button/DeleteButton"
import DecimalPointButton from "../button/DecimalPointButton"

class ButtonContaier extends Component {

    choiceEquation = undefined
    setEquation = equation => {
        const { setPresentCalculationEquation } = this.props
        let inputNumberPostion = setPresentCalculationEquation(equation)

        if (inputNumberPostion === 'RIGHT') {
            this.choiceEquation = equation
        }
    }

    resetEquationButtonColor = () => {
        this.choiceEquation = undefined
    }

    setNumber = number => {
        const { setPresentCalculationNumber } = this.props
        setPresentCalculationNumber(number)
    }

    setCalculate = () => {
        const { calculate } = this.props
        if (calculate()) {
            this.resetEquationButtonColor()
        }
    }

    setButtonColor = (equation) => {
        if (this.choiceEquation === equation) {
            return "#21b6ae"    
        }
        return "#2e7d32"
    }

    setValueInitialization = () => {
        const { valueInitialization } = this.props
        valueInitialization()
    }

    setDeleteNumberValue = () => {
        const { deleteNumberValue } = this.props
        deleteNumberValue()
    }

    setDecimalPointValue = () => {
        const { setDecimalPointValue } = this.props
        setDecimalPointValue()
    }

    render() {
        return (
            <Container maxWidth="sm">
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <Initialization buttonDisplayName="AC" colorCode="success" setValueInitialization={this.setValueInitialization} />
                    <EquationButton buttonDisplayName="%" colorCode={ this.setButtonColor("%") } setEquation={this.setEquation} />
                    <EquationButton buttonDisplayName="/" colorCode={ this.setButtonColor("/") } setEquation={this.setEquation} />
                    <DeleteButton buttonDisplayName="Del" colorCode="success" setDeleteNumberValue={this.setDeleteNumberValue} />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <NumberButton buttonDisplayName="7" colorCode="success" setNumber={this.setNumber} />
                    <NumberButton buttonDisplayName="8" colorCode="success" setNumber={this.setNumber} />
                    <NumberButton buttonDisplayName="9" colorCode="success" setNumber={this.setNumber} />
                    <EquationButton buttonDisplayName="*" colorCode={ this.setButtonColor("*") } setEquation={this.setEquation} />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <NumberButton buttonDisplayName="4" colorCode="success" setNumber={this.setNumber} />
                    <NumberButton buttonDisplayName="5" colorCode="success" setNumber={this.setNumber} />
                    <NumberButton buttonDisplayName="6" colorCode="success" setNumber={this.setNumber} />
                    <EquationButton buttonDisplayName="-" colorCode={ this.setButtonColor("-") } setEquation={this.setEquation} />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <NumberButton buttonDisplayName="1" colorCode="success" setNumber={this.setNumber} />
                    <NumberButton buttonDisplayName="2" colorCode="success" setNumber={this.setNumber} />
                    <NumberButton buttonDisplayName="3" colorCode="success" setNumber={this.setNumber} />
                    <EquationButton buttonDisplayName="+" colorCode={ this.setButtonColor("+") } setEquation={this.setEquation} />
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, margin: 1 }}>
                    <CalculatorButton buttonDisplayName="+/-" colorCode="success" />
                    <NumberButton buttonDisplayName="0" colorCode="success" setNumber={this.setNumber} />
                    <DecimalPointButton buttonDisplayName="." colorCode="success" setDecimalPointValue={this.setDecimalPointValue} />
                    <CalculatorButton buttonDisplayName="=" colorCode="success" setCalculate={this.setCalculate} />
                </Box>
            </Container>
        )
    }
}

export default ButtonContaier