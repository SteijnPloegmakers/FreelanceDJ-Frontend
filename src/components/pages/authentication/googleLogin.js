import React from 'react';
import {GoogleLogin} from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import {useHistory} from "react-router-dom";

function Login() {

    const history = useHistory()

    const onSuccess = (res) => {
        console.log("Login success!")
        const userObject = jwtDecode(res.credential)
        console.log(userObject)

        const formData = new FormData();
        formData.append("name", userObject.name)
        formData.append("email", userObject.email)

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'multipart/form-data'},
            body: formData
        }

        fetch("https://localhost:7023/api/user",
            requestOptions).then(response => response.json())
        history.push("/djs")
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