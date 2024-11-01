import { useState, useEffect } from "react";

function Message(){
    const [count, setCount] = useState(1);
    useEffect(() => {
        setCount(2)
    }, []);    
    return (
        <p>Hello {count}</p>
    );
}

export default Message;