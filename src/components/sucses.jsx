import Footer from "./footer";
import "./sucses.css"

function Sucses() {
    return (
       <div>
       <div className="sucses-sayfasi">
            <div className="baslik-alani">
                <img src="../images/iteration-1-images/logo.svg" alt="teknolojik yemekler" />
                <p className="slogan">lezzetin yolda</p>
                <h1>SİPARİŞ ALINDI</h1>
                <hr />
            </div>
                <h3>Position Absolute Acı Pizza</h3>
            <div className="siparis-ozeti">
                <div className="ozett">
                    <p><strong>Boyut:</strong> L</p>
                    <p><strong>Hamur:</strong> Süper İnce</p>
                    <p><strong>Ek Malzemeler:</strong> Pepperoni, Sosis, Mısır, Ananas, Jalapeno</p>
                </div>

                <div className="fiyat-kutusu">
                    <h4>Sipariş Toplamı</h4>
                    <p>
                        <strong>Seçimler</strong>
                        <span>25.00₺</span>
                    </p>
                    <p>
                        <strong>Toplam</strong>
                        <span>110.50₺</span>
                    </p>
                </div>
            </div>


           
        </div>
 <Footer />
 </div>
    );
}

export default Sucses;