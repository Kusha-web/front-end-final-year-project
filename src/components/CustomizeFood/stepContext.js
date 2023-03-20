import React, { useState } from "react";
import CustomizeFood from "./index";
//import { useNavigate} from 'react-router-dom';

export const multiStepContext = React.createContext();
const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [customizeData, setCustomizeData] =  useState([]);
    //const navigate = useNavigate();

    function submitData() {
        setCustomizeData('');
        setStep(1);
    }

    return (
        <multiStepContext.Provider value = {{currentStep, setStep, customizeData, setCustomizeData, submitData}}>
            <CustomizeFood/>
        </multiStepContext.Provider>
    )
}  

export default StepContext;