// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMeComponent() {
    function handleEyes() {
        console.log("Good!");
    }
    function handlEyesAway() {
        console.log("Hey! Eyes on me!");
    }
    return (

        <button onFocus={handleEyes} onBlur={handlEyesAway}

        >Eyes on me</button>

    );
}
export default EyesOnMeComponent;