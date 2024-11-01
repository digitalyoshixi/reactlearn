import { useState } from "react";

function Light({light, setLight}){

    return (
        <button onClick={() => setLight(!light)}>Toggle</button>
    )
}

export default Light;