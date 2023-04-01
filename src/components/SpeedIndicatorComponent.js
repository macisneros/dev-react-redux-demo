import React, {useState} from "react";
import {useSelector} from "react-redux";

function SpeedIndicatorComponent() {

    const rotation = useSelector((state) => state.rotation.value)

    function updateColor(rotation) {
        if (rotation >= 5) {
            return "#008000"
        } else if (rotation < 5 && rotation > 2) {
            return "#FFFF00"
        } else {
            return "#FF0000"
        }
    }

    return (
        <p
            style={{color: updateColor(rotation)}}
        >
            Moving at {rotation}s
        </p>
    )
}

export default SpeedIndicatorComponent