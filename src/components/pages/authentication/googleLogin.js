import {useEffect, useState} from "react";
import jwtDecode from "jwt-decode";

export default function GoogleLogin(){
    const [user, setUser] = useState({});

    function handleCallBackResponse(response){
        console.log("Encoded JWT ID token: " + response.credential )
        var userObject = jwtDecode(response.credential)
        console.log(userObject)
        setUser(userObject)
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignOut(event){
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "978816981549-ov3fi596s8gvsv4e2cv96c89msppqijp.apps.googleusercontent.com",
            callback: handleCallBackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
        );

        google.accounts.id.prompt();
    }, [])

    return(<div>
            <div id="signInDiv"/>
            { user &&
            <div>
                <img alt="" src={user.picture}/>
                <h3>{user.name}</h3>
            </div>
            }
            {Object.keys(user).length !== 0 &&
            <button onClick={(e)=> handleSignOut(e)}>Sign Out</button>
            }
        </div>

    )
}