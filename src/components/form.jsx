import React, { useState } from "react";
import "./form.css";

export default function PizzaForm({ boyut, hamur, ekMalzeme, siparisNotu, adet, HandleAdet, HandleSiparis, HandleMalzeme, HandleHamur, HandleBoyut, handleSubmit }) {


    const malzemeListesi = [
        "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
        "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno",
        "Sarımsak", "Biber", "Ançuez", "Ananas", "Kabak"
    ];

    return (

        <>

            <header className="form-ust">
                <img src="../../images/iteration-1-images/logo.svg" alt="Logo" className="logo" />
            </header>
            <div className="siparistip">
                <div className="pcformpizza">
                    <img src="../../images/iteration-2-images/pictures/form-banner.png" alt="pidzaaaaağ" />

                    <span className="ana-span"><a className="ana-link" href="/">Anasayfa- </a>Sipariş Oluştur</span>

                    <h1 className="pizza-baslik">Position Absolute Acı Pizza</h1>
                    <p className="fiyat">
                        <span className="fiyat-sayi">85,50₺</span>
                        <span className="puan">4.9 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(200)</span>
                    </p>
                    <p className="aciklama">
                        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
                        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.
                        Küçük bir pizzaya bazen pizzetta denir.
                    </p>
                </div>
            </div>
            {<form className="pizza-form" onSubmit={handleSubmit}>
                <div className="secenekler">
                    <div className="secims">
                        <div className="boyut-secimi">
                            <label className="label-baslik">Boyut Seç*</label>
                            <div className="radio-label">
                                <label><input type="radio" name="boyut" value="Küçük" onChange={HandleBoyut} checked={boyut === "Küçük"} /> S</label>
                                <label><input type="radio" name="boyut" value="Orta" onChange={HandleBoyut} checked={boyut === "Orta"} /> M</label>
                                <label><input type="radio" name="boyut" value="Büyük" onChange={HandleBoyut} checked={boyut === "Büyük"} /> L</label>
                            </div>
                        </div>

                        <div className="hamur-secimi">
                            <label>Hamur Seç*</label>
                            <select
                                data-cy="hamur-test"
                                value={hamur} onChange={HandleHamur}>
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
                        <textarea
                            data-cy="siparis-notu"
                            rows={3}
                            type="text"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            value={siparisNotu}
                            onChange={HandleSiparis}

                        />
                    </div>
                    <hr></hr>

                    <div className="alt-kisim">
                        <div className="adet-kontrol">
                            <button type="button" name="azalt" onClick={HandleAdet}>-</button>
                            <span>{adet}</span>
                            <button type="button" name="arttır" onClick={HandleAdet}>+</button>
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
                        <div className="btn-siparis">
                            <button type="submit" className="siparis-ver">SİPARİŞ VER</button>
                        </div>
                    </div>



                </div>



            </form>}


        </>
    );
}
