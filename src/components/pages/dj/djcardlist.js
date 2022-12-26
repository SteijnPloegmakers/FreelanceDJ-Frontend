import {useEffect, useState} from "react";
import DjCard from "./djcard";

export default function DjCardList(){
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

    return <div>
        {djs.map((dj, key) => (
            <DjCard id={dj.id} name={dj.name} email={dj.email} description={dj.description} phone={dj.phone} price={dj.price} key={key}/>
        ))}
    </div>
}