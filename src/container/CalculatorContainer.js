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
                leftNumber: null,
                rightNumber: null
            }
        }

        console.log("this.state", this.state)
    }

    setEquation = equation => {

        this.setState({
            presentCalculationFormula: {
                ...this.state.presentCalculationFormula,
                equation: equation
            }
        })
        console.log("this.state", this.state)
    }

    setNumber = number => {
        
        if (this.state.presentCalculationFormula.equation !== null) {
            this.setState({
                presentCalculationFormula: {
                    ...this.state.presentCalculationFormula,
                    rightNumber: number
                }
            })
        } else {
            this.setState({
                presentCalculationFormula: {
                    ...this.state.presentCalculationFormula,
                    leftNumber: number
                }
            })
        }
        console.log("this.state", this.state)
    }

    render() {
        return (
            <>
                <CalculatorTextField calculatorFormulaText={this.state.presentCalculationFormula} />
                <ButtonContaier setPresentCalculationEquation={this.setEquation} setPresentCalculationNumber={this.setNumber} />
            </>
        )
    }
}

export default CalculatorContaier