import {Route} from "react-router-dom";
import Index from "./components/pages/home";
import DJCard from "./components/pages/dj/djcard";


function DJRouter() {
    return <div>
        <Route path="/index" component={Index}/>
        <Route path="/djs" component={DJCard}/>
    </div>

}

export default DJRouter