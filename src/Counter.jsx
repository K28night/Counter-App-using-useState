import { useState } from 'react'
const Counter = () => {
    const [count, setCount] = useState(0);
    const [showCount,setShowCount]=useState(false);
    return (
        <div style={{ margin: "10rem" }}>
            <button onClick={()=>setShowCount(!showCount)}>
                {
                    showCount?'Hide Show Count':'show Count'
                }</button>
                {
                    showCount?(
                        <>
                        <h2>Count show Open</h2>
                        <h3>Count is {count}</h3>
                        <button onClick={()=>setCount(count+1)}>Increment</button>
                        </>
                    ):null
                }
        </div>
    );
}

export default Counter;
