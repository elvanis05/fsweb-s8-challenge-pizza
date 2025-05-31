import React from "react";

const Duyurular = ({SwapFunc}) =>{
return(
    <section className="duyurular">
        <div className="duyuru-sol">
          <div className="duyuru-icerik">
            <h3>Özel<br />Lezzetus</h3>
            <p>Position: Absolute Acı Burger</p>
            <button onClick={()=>SwapFunc ("Form") }>SİPARİŞ VER</button>
          </div>
        </div>

        <div className="duyuru-sag">
          <div className="duyuru-kutu siyah">
            <div className="duyuru-icerik">
              <h3>Hackathlon<br />Burger Menü</h3>
              <button onClick={()=>SwapFunc ("Form") }>SİPARİŞ VER</button>
            </div>
          </div>

          <div className="duyuru-kutu krem">
            <div className="duyuru-icerik">
              <h3><span className="vurgulu">Çooook</span> hızlı <br /> npm gibi kurye</h3>
              <button onClick={()=>SwapFunc ("Form") }>SİPARİŞ VER</button>
            </div>
          </div>
        </div>
      </section>
)

}
export default Duyurular;