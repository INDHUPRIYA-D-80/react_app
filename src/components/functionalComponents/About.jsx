import { useEffect, useState } from "react";
/*const About =()=>{
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
export default About;*/
const About = () => {
    const [tabName, setTabNAme] = useState("Start Learning")
    const updateTablet = () => {
        setTabNAme("1.ES6-ECMA Script 6 Standard")
    }
    const updateTablet1 = () => {
        setTabNAme("2.JSX-JavaScript XHTML")
    }
    const updateTablet2 = () => {
        setTabNAme("React is a JavaScript-based UI development library.")
    }
    console.log("Welcomes you")
    useEffect(() => {
        console.log("Don't be afraid of where you are starting just thought what you are leaning")
    },[tabName])
    return (
        <div>
            <h1>{tabName}</h1>
            <button onClick={updateTablet}>Click me to learn about Es6</button>
            <button onClick={updateTablet1}>Click me to learn about JSX</button>
            <button onClick={updateTablet2}>Click me to learn about REACT</button>
        </div>
    )
}

export default About;


/*    const updateTablet = () => {
        setTabName("posts")
        //setTabName("1.ES6-ECMA Script 6 Standard")
    }
    const updateTablet1 = () => {
        setTabName("comments")
        //setTabName("2.JSX-JavaScript XHTML")
    }
    const updateTablet2 = () => {
        setTabName("todos")
        //setTabName("React is a JavaScript-based UI development library.")
    }
    console.log("Welcomes you")
    useEffect(() => {
        fetch(`"https://jsonplaceholder.typicode.com/${tabName}"`)
      .then(response => response.json())
      .then(json => console.log(json))
        // console.log("Don't be afraid of where you are starting just thought what you are leaning")
    },[tabName])*/