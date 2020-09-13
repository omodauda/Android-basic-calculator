import React, {useState, useEffect} from 'react';

const AppContext = React.createContext();

function AppProvider(props){

    {/* Display screen states*/}
    const [input, setInput] = useState(null);
    const [display, setDisplay] = useState(); //result

    useEffect(() => {
        if(input === null){
            setDisplay()
        }
    }, [input]);

    {/* Handles number input*/}
    const handleInput = (props) => {
        const operand = ["*" , '/'];
        setInput((prevInput) =>{
            if(prevInput === null){
                return props
            } else if(prevInput === null && props === '*'){  //RIGHT HERE
                return
            } else {
             return `${prevInput}${props}`
            }
        })
    };

    {/* Handles number removal*/}
    const removeInput = () => {

        setInput((prevInput) => {
            const lastInput = prevInput.length - 1;
            const reducedInput = prevInput.substr(0, lastInput);
            return reducedInput
        })
    }

    {/*Handles clearing of screen on long press */}
    const clearScreen = () => {
        setInput(null);
        setDisplay();
    }
    
    {/* Calculates inputs*/}
    const evaluate = () => {
        const result = eval(input).toString(); //returns number type normally
        setDisplay(result)
    }

    return (
        <AppContext.Provider value={{
            input: input,
            setInput: setInput,
            display: display,
            setDisplay: setDisplay,
            handleInput: handleInput,
            removeInput: removeInput,
            evaluate: evaluate,
            clearScreen: clearScreen

        }}>
            {props.children}
        </AppContext.Provider>
    )
}

const AppConsumer = AppContext.Consumer;

export {AppProvider, AppConsumer, AppContext};