import Footer from "./footer";
import "./sucses.css"




function Sucses({ ekMalzeme, boyut, hamur, adet }) {

    const pizzaFiyati = 85.5;
    const ekstraMalzemeFiyati = ekMalzeme.length * 5;
    const toplamTutar = (pizzaFiyati + ekstraMalzemeFiyati) * adet;

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
                        <p><strong>Boyut:</strong> {boyut}</p>
                        <p><strong>Hamur:</strong> {hamur}</p>
                        <p><strong>Ek Malzemeler:</strong>{ekMalzeme}</p>
                    </div>

                    <div className="fiyat-kutusu">
                        <h4>Sipariş Toplamı</h4>
                        <p>
                            <strong>Seçimler</strong>
                            <span>{ekstraMalzemeFiyati}</span>
                        </p>
                        <p>
                            <strong>Toplam</strong>
                            <span>{toplamTutar}</span>
                        </p>
                    </div>
                </div>



            </div>
            <Footer />
        </div>
    );
}

export default Sucses;