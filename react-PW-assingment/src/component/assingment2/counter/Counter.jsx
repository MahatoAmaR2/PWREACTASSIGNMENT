import React, { useState } from "react";
import './count.css';


function Counter() {
const [countvalue, setcountvalue] = useState(0)

    return(
        <>
    <div className="box">
        <h2>
            {countvalue}
        </h2>
        <div>
        <button onClick={()=>setcountvalue(countvalue+1)} className="btn1">Increment</button>
        <button onClick={()=>(countvalue===0 ? setcountvalue(0):setcountvalue(countvalue-1) )}>Decrement</button>
        </div>
    </div>
        </>
    )
}
export default Counter;