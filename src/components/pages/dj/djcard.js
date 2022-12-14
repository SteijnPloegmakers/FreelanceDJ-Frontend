import "./Styling/djcard.css"
import React from "react";
import axios from "axios";

export default class DJCard extends React.Component{

    state = {
        djs: []
    }

    componentDidMount() {
        axios.get(`https://localhost:7284/api/djaccount`)
            .then(res => {
                this.setState({djs: res.data})
            })
    }

        render() {
            return (
                <div>
                    <div className="column">
                        {this.state.djs.map((dj) => {
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
            )
        }

}
