import { Link } from "react-router-dom";
import "../../css/Navbar.css"
const Navbar = () => {
    return (
        <nav>
            <ol>

                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/explantion'>Explanation</Link></li>
                <li><Link to='/LearnMore'>Learn More</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/Login'>Login</Link></li>
                <li><Link to ='/useRef'>UseRef</Link></li>
                <li><Link to ='/memo'>Memo</Link></li>
                <li><Link to ='/callback'>CallBack</Link></li>
            </ol>
        </nav>
    )


}
export default Navbar;