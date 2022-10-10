import React from "react";
import ButtonContaier from "./ButtonContainer";
import CalculatorTextField from '../text/CalculatorTextField';

class CalculatorContaier extends React.Component {

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