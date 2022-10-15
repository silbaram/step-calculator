import React, { Component } from "react";
import ButtonContaier from "./ButtonContainer";
import CalculatorTextField from '../text/CalculatorTextField';

class CalculatorContaier extends Component {
    render() {
        return (
            <>
                <CalculatorTextField />
                <ButtonContaier />
            </>
        )
    }
}

export default CalculatorContaier