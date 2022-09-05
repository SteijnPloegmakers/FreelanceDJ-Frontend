import {Route} from "react-router-dom";
import Index from "./components/pages/home";


function Router() {
    return <div>
        <Route path="/index" component={Index}/>
    </div>

}

export default Router