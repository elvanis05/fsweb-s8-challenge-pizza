import React, { useState } from "react";
import "./form.css";

export default function PizzaForm({ boyut, hamur, ekMalzeme, siparisNotu, adet, HandleAdet, HandleSiparis, HandleMalzeme, HandleHamur, HandleBoyut }) {


    const malzemeListesi = [
        "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
        "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno",
        "Sarımsak", "Biber", "Ançuez", "Ananas", "Kabak"
    ];

    return (
        <div className="pizza-form">
            <header className="form-ust">
                <img src="../../images/iteration-1-images/logo.svg" alt="Logo" className="logo" />
                <nav>
                    <a href="/">Anasayfa</a> <span>- Sipariş Oluştur</span>
                </nav>
            </header>

            <main className="form-icerik">
                <h1 className="pizza-baslik">Position Absolute Acı Pizza</h1>
                <p class="fiyat">
                    <span class="fiyat-sayi">85,50₺</span>
                    <span class="puan">4.9 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(200)</span>
                </p>
                <p className="aciklama">
                    Frontend Dev olarak hâlâ position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
                    pizza domate peyni sadfsf  dsfsdf dsg  dfg dsf gdfg dsfg dfg df gdfg dfsg dsfşklgj dfşh jdfklşhj kdfljgklş dsjl dkl sjdflkg
                </p>

                <div className="secenekler">
                    <div className="boyut-secimi">
                        <label className="label-baslik">Boyut Seç*</label>
                        <div className="radio-label">
                            <label><input type="radio" name="boyut" value="Küçük" onChange={HandleBoyut} /> S</label>
                            <label><input type="radio" name="boyut" value="Orta" onChange={HandleBoyut} /> M</label>
                            <label><input type="radio" name="boyut" value="Büyük" onChange={HandleBoyut} /> L</label>
                        </div>
                    </div>

                    <div className="hamur-secimi">
                        <label>Hamur Seç*</label>
                        <select value={hamur} onChange={HandleHamur}>
                            <option disabled>Hamur Kalınlığı</option>
                            <option>İnce</option>
                            <option>Orta</option>
                            <option>Kalın</option>
                        </select>
                    </div>
                </div>

                <div className="ek-malzeme">
                    <h3>Ek Malzemeler</h3>
                    <p>En fazla 10 malzeme seçebilirsiniz. Her biri: 5₺</p>
                    <div className="malzeme-listesi">
                        {malzemeListesi.map((malzeme, i) => (
                            <label key={i}>
                                <input type="checkbox" value={malzeme} checked={ekMalzeme.includes(malzeme)} onChange={HandleMalzeme} />
                                {malzeme}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="siparis-notu">
                    <label>Sipariş Notu</label>
                    <input
                        type="text"
                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                        value={siparisNotu}
                        onChange={HandleSiparis}

                    />
                </div>
                <hr></hr>

                <div className="alt-kisim">
                    <div className="adet-kontrol">
                        <button name="azalt" onClick={HandleAdet}>-</button>
                        <span>{adet}</span>
                        <button name="arttır" onClick={HandleAdet}>+</button>
                    </div>

                    <div className="toplam-ve-buton">
                        <div className="toplam-kutu">
                            <h3>Sipariş Toplamı</h3>
                            <div className="secim-satiri">
                                <span>Seçimler</span>
                                <span>{(ekMalzeme.length * 5)}₺</span>
                            </div>
                            <div className="secim-satiri toplam">
                                <span>Toplam</span>
                                <span>{((85.5 + ekMalzeme.length * 5) * adet)}₺</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="buton-sagda">
                    <button className="siparis-ver">SİPARİŞ VER</button>
                </div>



            </main>
        </div>
    );
}
