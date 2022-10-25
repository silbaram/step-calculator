import React, { Component } from "react";
import ButtonContaier from "./ButtonContainer";
import CalculatorTextField from '../text/CalculatorTextField';

class CalculatorContaier extends Component {

    constructor(props) {
        super(props)
        this.state = {
            calculatorHistory: [],
            presentCalculationFormula: {
                equation: null,
                leftNumber: [],
                rightNumber: []
            },
            displayNumber: 0
        }
    }

    setEquation = equation => {
        this.setState({
            presentCalculationFormula: {
                ...this.state.presentCalculationFormula,
                equation: equation
            }
        })
    }

    setNumber = number => {
        if (this.state.presentCalculationFormula.equation === null) {
            this.setState({
                presentCalculationFormula: {
                    ...this.state.presentCalculationFormula,
                    leftNumber: this.state.presentCalculationFormula.leftNumber.concat(number)
                }
            },
            function() {
                this.setState({
                    displayNumber: this.state.presentCalculationFormula.leftNumber.join('')
                })
            })
        } else {
            this.setState({
                presentCalculationFormula: {
                    ...this.state.presentCalculationFormula,
                    rightNumber: this.state.presentCalculationFormula.rightNumber.concat(number)
                },
                displayNumber: this.state.presentCalculationFormula.rightNumber.join('')
            },
            function() {
                this.setState({
                    displayNumber: this.state.presentCalculationFormula.leftNumber.join('')
                })
            })
        }
    }

    render() {
        return (
            <>
                <CalculatorTextField displayNumber={this.state.displayNumber} />
                <ButtonContaier setPresentCalculationEquation={this.setEquation} setPresentCalculationNumber={this.setNumber} />
            </>
        )
    }
}

export default CalculatorContaier