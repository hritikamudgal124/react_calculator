import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

const buttonsData = [
    ["AC", "CE", "/", "*"],
    [7, 8, 9, "-"],
    [4, 5, 6, "+"],
    [1, 2, 3, "="],
    [0, ".", "", ""],
]

const wrapperStyle = {
    width: "300px",
    margin: "50px auto 0 auto"
}

let Wrap = () => {

    const [displayValue, setDisplayValue] = useState("")

    const handleOnButtonClick = (e) => {
        const { innerText } = e.target;
        switch(innerText){
        case "=":
            // Submit logic
            setDisplayValue(eval(displayValue));
            console.log(setDisplayValue);
            break;
            
        case "AC":
            setDisplayValue('')
            break;
        case "CE":
            setDisplayValue(displayValue.slice(0,-1))
            break; 
        default:
            setDisplayValue(displayValue + innerText);
        }
        
    }

    return (
        <div style={wrapperStyle}>
            <Display value={displayValue} />
            <Buttons onClick={handleOnButtonClick} data={buttonsData} />
        </div>
);
    }

export default Wrap;