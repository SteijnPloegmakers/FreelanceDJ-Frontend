import {Route} from "react-router-dom";
import Index from "./components/pages/home";
import DJCard from "./components/pages/dj/djcard";
import GoogleLogin from "./components/pages/authentication/googleLogin";


function DJRouter() {
    return <div>
        <Route path="/index" component={Index}/>
        <Route path="/djs" component={DJCard}/>
        <Route path="/login" component={GoogleLogin}/>
    </div>

}

export default DJRouter