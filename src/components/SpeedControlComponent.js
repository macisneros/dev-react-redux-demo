import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {incrementRotation, reduceRotation} from "../redux/RotationReducer";

function SpeedControlComponent() {

    const dispatch = useDispatch()

    const [text, setText] = useState("Click me!");

    function changeText() {
        if (text === "Click me!") {
            setText("Clicked!")
        } else {
            setText("Click me!")
        }
    }

    return (
        <div>
            <button onClick={changeText}>
                {text}
            </button>
            <button onClick={() => dispatch(incrementRotation())}>
                Faster
            </button>
            <button onClick={() => dispatch(reduceRotation())}>
                Slower
            </button>
        </div>
    )
}

export default SpeedControlComponent