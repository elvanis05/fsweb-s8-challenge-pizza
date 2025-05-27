import React from "react";

const Lezzetcard = () => {
    return (
        <div className="lezzetler-kartlar">
            <div className="urun-kart">
                <img src="../images/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza" />
                <h3>Terminal Pizza</h3>
                <div className="urun-detay">
                    <span>4.9</span>
                    <span>(200)</span>
                    <strong>60₺</strong>
                </div>
            </div>

            <div className="urun-kart">
                <img src="../images/iteration-2-images/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
                <h3>Position Absolute Acı Pizza</h3>
                <div className="urun-detay">
                    <span>4.9</span>
                    <span>(200)</span>
                    <strong>60₺</strong>
                </div>
            </div>

            <div className="urun-kart">
                <img src="../images/iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
                <h3>useEffect Tavuklu Burger</h3>
                <div className="urun-detay">
                    <span>4.9</span>
                    <span>(200)</span>
                    <strong>60₺</strong>
                </div>
            </div>
        </div>
    )

}
export default Lezzetcard;