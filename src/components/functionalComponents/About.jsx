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
    }, [tabName])
    return (
        <div>
            <br></br>
            <h1>{tabName}</h1>
            <h1>
            Example for UseEffect
        </h1>
            <br></br>
            <button onClick={updateTablet}>Click me to learn about Es6</button><br></br><br></br>
            <button onClick={updateTablet1}>Click me to learn about JSX</button><br></br><br></br>
            <button onClick={updateTablet2}>Click me to learn about REACT</button>

            <h2>React Js
    
    Js is a globally used Front-end JS framework and is popular with both software developers and project sponsors
    React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
    The website which are using REACT are built in such of that it will not refresh the entire page but the only the required part.
    
    </h2> 
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