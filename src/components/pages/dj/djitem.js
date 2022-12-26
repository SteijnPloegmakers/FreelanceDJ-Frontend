import React, {useEffect, useState} from "react";
import "./Styling/djitem.css"

export default function DjItem(props){

    const [dj, setDj] = useState('')
    const [email, setEmail] = useState([])

     useEffect(() => {
        fetch("https://localhost:7284/api/djaccount/" + props.id, {
            method: "GET"
        }).then(res => {
            if (res.ok){
                return res.json();
            }
            throw new Error("Server says bad response")
        }).then((res) => {setDj(res)})
    }, [props.id])

    const handleEmail = e => {
        setEmail(e.target.value)
        console.log(email)
    }

    function sendEmail(){
        console.log(email)
    }

    return (
        <div>
            <div className="">
                <div className="itemContainer">
                    <img className="itemImage" src="https://wallpaperaccess.com/full/1909755.jpg" alt=""/>
                    <div className="">
                        <h4 className="djName">{dj.name}</h4>
                        <h5>{dj.email}</h5>
                        <p>{dj.description}</p>
                    <h6 className="">Prijs per uur: €{dj.price}</h6>
                    </div>
                    <div className="emailBox">
                        <textarea onChange={handleEmail} placeholder="Send message to the DJ..."/><br/>
                        <button className="" onClick={sendEmail}>Send Email</button>
                    </div>
                </div>
            </div>
        </div>
    );
}