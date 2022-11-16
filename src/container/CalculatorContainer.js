import React, { Component } from "react";
import ButtonContaier from "./ButtonContainer";
import CalculatorTextField from '../text/CalculatorTextField';

class CalculatorContaier extends Component {

    LEFT_INPUT_NUMBER_POSITION = "LEFT"
    RIGHT_INPUT_NUMBER_POSITION = "RIGHT"
    numberInputPositon = ''

    constructor(props) {
        super(props)
        this.state = {
            calculatorHistory: [],
            presentCalculationFormula: {
                equation: null,
                leftNumber: [],
                rightNumber: [],
                calculateResult: 0
            },
            displayNumber: 0
        }
    }

    setEquation = equation => {
        if (this.numberInputPositon === this.LEFT_INPUT_NUMBER_POSITION || this.state.presentCalculationFormula.equation !== null) {
            this.setState({
                presentCalculationFormula: {
                    ...this.state.presentCalculationFormula,
                    equation: equation
                }
            })

            return this.RIGHT_INPUT_NUMBER_POSITION
        }
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

                this.numberInputPositon = this.LEFT_INPUT_NUMBER_POSITION
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
                    displayNumber: this.state.presentCalculationFormula.rightNumber.join('')
                })

                this.numberInputPositon = this.RIGHT_INPUT_NUMBER_POSITION
            })
        }
    }

    calculate = () => {
        if (this.state.presentCalculationFormula.leftNumber.length === 0 || this.state.presentCalculationFormula.rightNumber.length === 0) {
            return
        }

        let isCalculate = false
        if (this.state.presentCalculationFormula.equation === "/") {
            isCalculate = true
            this.setState({
                displayNumber: Number(this.state.presentCalculationFormula.leftNumber.join('')) / Number(this.state.presentCalculationFormula.rightNumber.join('')),
            })
        }

        if (isCalculate) {
            this.processingAfterCalculation()
        }

        return isCalculate
    }

    processingAfterCalculation = () => {
        this.numberInputPositon = this.RIGHT_INPUT_NUMBER_POSITION
        this.setState({
            presentCalculationFormula: {
                ...this.state.presentCalculationFormula,
                leftNumber: this.state.displayNumber.replace(""),
                equation: null
            }
        }, 
        function() {
            console.log("this.state", this.state)
        })
    }

    valueInitialization = () => {
        this.numberInputPositon = this.RIGHT_INPUT_NUMBER_POSITION
        this.setState({
            calculatorHistory: [],
            presentCalculationFormula: {
                equation: null,
                leftNumber: [],
                rightNumber: [],
                calculateResult: 0
            },
            displayNumber: 0
        })
    }

    render() {
        return (
            <>
                <CalculatorTextField displayNumber={this.state.displayNumber} />
                <ButtonContaier
                    setPresentCalculationEquation={this.setEquation}
                    setPresentCalculationNumber={this.setNumber}
                    calculate={this.calculate}
                    valueInitialization={this.valueInitialization}
                />
            </>
        )
    }
}

export default CalculatorContaier