import React, {useState} from 'react';
import {GoogleLogin} from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import {useHistory} from "react-router-dom";



function Login() {

    const history = useHistory()
    const [user, setUser] = useState(null)

    const onSuccess = (res) => {
        console.log("Login success!")
        const userObject = jwtDecode(res.credential)
        console.log(userObject)


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            //body: ;
        }

        fetch("https://localhost:7023/api/user",
            requestOptions).then(async (response) => {
                const data = await response.json()
                setUser(data)
            history.push("/djs")
            })
    }
    const onFailure = (res) => {
        console.log("Login failure! res:", res)
    }

    return <div id="signInButton">
        <GoogleLogin
            buttonText={"Login"}
            onSuccess={onSuccess}
            onFailure={onFailure}
        />
    </div>;
}

export default Login;