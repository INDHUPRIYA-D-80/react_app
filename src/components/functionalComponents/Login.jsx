/* const Login = () => {
  return (
    <div>
      <h1>  Why should I use React?<br></br></h1>
      
        <ul>
        <h2>
        A front-end UI requires high user interaction..<br></br>
        React is a great fit for applications with multiple components or blocks of components which have individual states that often change in response to actions users perform like using accordions, dropdowns, navigation menus, form validations, and submissions..</h2>
      <h2>To Learn more on React visit:-https://legacy.reactjs.org/ ..</h2>
      </ul>
    </div>
  )

}
export default Login;

*/

/*
const Contact=()=>{
    return(
        <div>
            <br />
            <h2>This page is meant for my contact details</h2>
        </div>
    )
}
export default Contact; */

import { useReducer } from "react";
const value={count:0}
function countFunction(state,action){
    switch (action.type) {
        case "sub":
            return {count:state.count-1}
        case "add":
            return {count:state.count+1}
        case "reset":
            return {count:value.count}
        default:
            return {count:value.count}
}
}
const Login =()=>{
    const [countVal,updateCount]=useReducer(countFunction,value);
    return (
        <div>
           <h1> This is useReducer example</h1>
           <h2>Count:{countVal.count}</h2>
           <button onClick={()=>updateCount({type:"add"})}>Add</button>
           <button  onClick={()=>updateCount({type:"sub"})}>Sub</button>
           <button onClick={()=>updateCount({type:"reset"})}>Reset</button>
        </div>
    )

}
export default Login;