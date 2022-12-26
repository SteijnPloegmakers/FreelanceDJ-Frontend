import "./Styling/djcard.css"
import {useHistory} from "react-router-dom";

export default function DjCard(props)
{
    let history = useHistory()

    function RedirectToDJ(){
        history.push("/djs/" + props.id)
    }
        return (
            <div>
                <div className="column">
                    <div className="djContainer" onClick={RedirectToDJ}>
                        <img className="image" src="https://wallpaperaccess.com/full/1909755.jpg" alt=""/>
                        <div className="text">
                            <h4 className="djName">{props.name}</h4><br/>
                            <p>{props.description}</p>
                        </div>
                        <div className="price">€{props.price}</div>
                    </div>
                </div>
            </div>
        );

}
