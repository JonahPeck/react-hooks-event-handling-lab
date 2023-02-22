// Code Keypad Component Here
import React from 'react'

function Keypad() {
    function KeypadPush(event) {
        console.log(event);
    }
    return (
        <div>
            <input
                type="password"
                onChange={event => console.log("Entering password...")}
            />
        </div>
    )
}

export default Keypad;