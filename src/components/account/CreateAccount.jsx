import { useState } from "react"; 

const CreateAccount = (props) => {

    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    const loginAsync = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password })
        };
        const response = await fetch('https://0xo69ga71b.execute-api.us-west-1.amazonaws.com/dev/login', requestOptions);
        const json = await response.json();
        return json
    }

    const login = async () => {
        if (username === null || username === "") {
            alert("Empty username or password")
        }

        const response = await loginAsync();
        console.log(response)

        if (response.statusCode === 400) {
            alert("Username Already Exists! \nIncorrect Credentials.")
        } else {
            let username = JSON.parse(response.body)['username'];
            console.log("Username : ", username)
            localStorage.setItem('username', username);
            props.navigate('/home');
        }
    }

    const handleUsernameChange = event => {
        setName(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    //<a className="signup-link link" href="/create_account">
    const CreateAccountForm = () => {
        return (
            <div class="center form-container">
                <div>
                    <img className="big-logo" src="images/logo.png"/>
                </div>
                <div class="logo-container">
                    Welcome to CreamCurry!
                </div>

                <span className="signup-link">Are you a home chef? <button className="signup-link link" onClick={() => {props.navigate('/login')}}>Start Earning Now!</button></span>

                <div className="line"></div>
                
                <div className="form-group">
                    <label className="label" htmlFor="email">Email</label>
                    <input required="" placeholder="Enter your email" name="email" id="email" type="text"/>
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="password">Password</label>
                    <input required="" name="password" placeholder="Enter your password" id="password" type="password"/>
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="first_name">First Name</label>
                    <input required="" name="first_name" placeholder="Enter your first name" id="first_name" type="password"/>
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="last_name">Last Name</label>
                    <input required="" name="last_name" placeholder="Enter your last name" id="last_name" type="password"/>
                </div>

                <button type="submit" className="form-submit-btn button"><span>Sign Up</span></button>

                <p className="signup-link">
                    Already have an account? <button className="signup-link link" onClick={() => {props.navigate('/login')}}>Sign in</button>
                </p>
                
            </div>
        );
    }
    
    return (
        <CreateAccountForm/>
    );
}

export default CreateAccount;