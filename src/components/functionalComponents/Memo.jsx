import React, { useMemo,useState } from "react";

const Memo = () => {
    const [number, updateNumber] = useState("")
    const [dark,updateTheme] = useState(false)
    const doubleNumber = useMemo(()=>{
       return doubleNumberSlow(number)
    },[number])
    function doubleNumberSlow(num) {
        console.log("Is it calling")
        for (let i = 0; i < 1000000; i++){}
            return num * 2
    }
    const theme = useMemo(()=>{
       return {
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
        }
    })
    return (
        <div>
            <h1>This is a Dangerous hook which is called useMemo</h1>
            <input type="number" value={number} onChange={(event)=>updateNumber(event.target.value)} />
            <button onClick={()=>updateTheme(dark => !dark)}>Change theme</button>
            <h2 style={theme}> The doubled Number is "{doubleNumber}"</h2>
           
        </div>
    )
}
export default Memo;


