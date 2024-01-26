//import { Link } from "react-router-dom";
import "../../css/footer.css";
const Footer= () => {
    return (
        <footer>
            <b>
            
                <div className="container"style={{display: 'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',color: 'black',
    backgroundColor: 'aqua'}}>
                <p>&copy;Copyrights to REACT</p>
                <a class="App-link" href="https://react.dev/learn/installation"target="_blank" rel="noopener noreferrer">Install</a>
                <a class="App-link" href="https://payalpaul2436.medium.com/10-main-core-concept-you-need-to-know-about-react-303e986e1763"target="_blank"rel="noopener noreferrer">MainConcepts</a>
                <a class="App-link" href="https://react.dev/learn/tutorial-tic-tac-toe" target="_blank" rel="noopener noreferrer">Tutorial</a>
                <a class="App-link" href='https://opensource.facebook.com/legal/terms'target="_blank"rel="noopener noreferrer">Terms</a>
                <a class="App-link" href='https://opensource.facebook.com/legal/privacy'target="_blank" rel="noopener noreferrer">Privacy</a>
                <a class="App-link" href='https://github.com/INDHUPRIYA-D-80/'target="_blank"rel="noopener noreferrer">Github</a>
                <a class="App-link" href='https://www.linkedin.com/feed/'target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <p>Contact:indhumirthi08@gmail.com</p>
                </div>
                </b>
        </footer>
       
    )
}
export default Footer;