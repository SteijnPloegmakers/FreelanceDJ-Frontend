import "./Styling/djcard.css"
import React, {useEffect, useState} from "react";

export default function DJCard()
{

    const [djs, setDjs] = useState([])

    useEffect(() => {
        fetch(`https://localhost:7284/api/djaccount`, {
            method: 'GET'
        }).then(res => {
                if (res.ok){
                    return res.json();
                }
                throw new Error("Server says bad response")
            }).then((res) => {setDjs(res)})
        },[]
    )

        return (
            <div>
                <div className="column">
                    {djs.map((dj) => {
                        return(
                            <div className="djContainer">
                                <img className="image" src="https://wallpaperaccess.com/full/1909755.jpg" alt=""/>
                                <div className="text">
                                    <h4 className="djName">{dj.name}</h4><br/>
                                    <p>{dj.description}</p>
                                </div>
                                <div className="price">{dj.price}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );

}
