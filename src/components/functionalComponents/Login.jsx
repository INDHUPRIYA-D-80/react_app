import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../css/login.css"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setemail] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);

    const useLogin = () => {

        if (username && password) {
            setLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2>Welcome, {username}!</h2>
                    {/* Add logout button or redirect to another page */}
                </div>
            ) : (
                <div>
                    <h2>Login</h2>
                    <form>
                        <label>
                            <b>
                                Username:
                            </b>
                            <input class="input"
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </label>
                        <br /><br />
                        <label>
                            <b>
                                Password:
                            </b>
                            <input class="input"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}

                            />
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                            <b>
                                Email
                            </b>
                            <input class="input"
                                type="email"
                                value={email}
                                onChange={(event) => setemail(event.target.value)}

                            />
                        </label>
                        <br />
                        <strong>
                        <button type="button" onClick={useLogin}>
                            Login
                        </button><br></br></strong>
                        <p>Doesn't have an account? <button><Link to="/register">Register</Link></button>.</p>
                    
                </form>
        </div>
    )
}
    </div >
  );
};

export default Login;