import { useState } from "react";
const Explanation=()=>{
    const[college,updateCollege] = useState("R-learn")
    const updating =() =>{
        updateCollege("React Learners")
    }
    return(
        <div>
            <h1>Welcome to {college}.</h1>
            <button onDoubleClick={updating}>Update  Name</button>
          <h2>  React is a JavaScript-based UI development library.</h2>
          <ul>
            <h3><li>It is Compatible and It is SPA(Single Page Application)</li>
                <li> Although React is a library rather than a language, it is widely used in web development. </li>
            <li>The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.</li>
            
            </h3>
            </ul> 
        </div>
    )

}
export default Explanation;


/*
import useState from"react";
const Explanation = () => {
    const [college,updateCollege] = useState("R-learn")
    const updating =() =>{
        updateCollege("React Learners")
    }
    return(
        <div>
            <h1>Welcome to {college}.</h1>
            <button onDoubleClick={updating}>Update  Name</button>
             
      <h2>React Js
    
    Js is a globally used Front-end JS framework and is popular with both software developers and project sponsors
    React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
    The website which are using REACT are built in such of that it will not refresh the entire page but the only the required part.
    
    </h2> 
    </div>
  )

}
export default Explanation;
*/