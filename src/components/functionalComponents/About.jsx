import { useState } from "react";
const About =()=>{
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
export default About;