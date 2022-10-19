import "./Styling/djcard.css"

function DJCard() {
    return (
        <div>
            <div className="column">
                <button className="djContainer">
                    <img className="image" src="https://wallpaperaccess.com/full/1909755.jpg" alt=""/>
                    <div className="text">
                        <h4 className="djName"> DJ Steijn</h4><br/>
                        <p>Tech House, House, Deep House, Big Room</p>
                    </div>
                    <div className="price">$12,50</div>
                </button>
            </div>
        </div>
    )}

export default DJCard;