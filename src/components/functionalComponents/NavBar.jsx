import { Link } from "react-router-dom";
import "../../css/Navbar.css"
const Navbar = () => {
    return (
        <nav>
        <ol>

            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/explantion'>Explanation</Link></li>
            <li><Link to='/login'>Learn More</Link></li>
        </ol>
        </nav>
    )


}
export default Navbar;