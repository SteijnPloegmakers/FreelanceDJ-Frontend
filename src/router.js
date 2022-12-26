import {Route} from "react-router-dom";
import Index from "./components/pages/home";
import GoogleLogin from "./components/pages/authentication/googleLogin";
import DjItem from "./components/pages/dj/djitem";
import DjCardList from "./components/pages/dj/djcardlist";


function DJRouter() {
    return <div>
        <Route path="/index" component={Index}/>
        <Route path="/login" component={GoogleLogin}/>
        <Route path="/djs" component={DjCardList}/>
        <Route path="/djs/:id" render={(props) =>
            <DjItem id={props.match.params.id}/>}/>
    </div>

}

export default DJRouter