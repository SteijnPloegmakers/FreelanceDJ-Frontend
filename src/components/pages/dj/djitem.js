import React, {useEffect, useState} from "react";
import "./Styling/djcard.css"

export default function DjItem(props){

    const [dj, setDj] = useState("")

    useEffect(() => {
        fetch("https://localhost:7284/api/djaccount/" + props.id, {
            method: "GET"
        }).then(res => {
            setDj(res.data)
        })
    }, [props.id])

    return (
        <div>
            <div className="column">
                <div className="djContainer">
                    <img className="image" src="https://wallpaperaccess.com/full/1909755.jpg" alt=""/>
                    <div className="text">
                        <h4 className="djName">{dj.name}</h4><br/>
                        <h5>{dj.email}</h5>
                        <p>{dj.description}</p>
                        <p>{dj.phone}</p>
                    </div>
                    <div className="price">
                        {dj.price}
                    </div>
                </div>
            </div>
        </div>
    );
}