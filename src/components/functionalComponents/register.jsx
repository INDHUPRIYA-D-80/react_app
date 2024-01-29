import "../../css/login.css"
import { Link } from "react-router-dom";
const Register = () => {
	return (
		<div>
			<body>
				<form >
					<h1><b><strong>Register</strong><br></br></b></h1>
					<strong><p>Enter Your details to create an account.</p><br></br>
						<p>Name:<input class="input" type="text" name="fname" value="" required></input ></p><br></br>
						<p>Email: <input class="input" type="text" name="femail" value="" required></input></p><br></br>
						<p>Password: <input class="input" type="password" name=" pwd1"></input></p><br></br>
						<p>Confirm Password: <input class="input" type="password" name="pwd2" value="" required></input ></p><br></br>
						<p>Address:<input class="input" type="text" name="faddress" value="" required></input ></p><br></br>
						<p>Mobile No:<input class="input" type="text" name="fmobno"></input ></p><br></br>
						<button class="submit" type="submit"></button><br></br>
						<p>Already have an account?<li><Link to='/Login'>Login</Link></li></p>
					</strong>
				</form>
			</body>
		</div>
	)
}
export default Register