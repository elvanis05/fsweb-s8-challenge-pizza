import "./App.css"
import PizzaForm from './components/form'
import React, { useState, useEffect } from "react";
import Sucses from './components/sucses';


function App() {
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("Hamur Kalınlığı");
  const [ekMalzeme, setEkMalzeme] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState("");
  const [adet, setAdet] = useState(1);

  function HandleBoyut(e) {
    setBoyut(e.target.value)
    console.log(e.target.value)
  }
  function HandleHamur(e) {
    setHamur(e.target.value)
    console.log(e.target.value)
  }


  function HandleMalzeme(e) {
    const secilen = e.target.value;

    setEkMalzeme(prev => {
      const yeniListe = prev.includes(secilen)
        ? prev.filter(item => item !== secilen)
        : [...prev, secilen];


      if (yeniListe.length > 10) {
        alert("En fazla 10 malzeme seçebilirsiniz.");
        return prev;
      }

      return yeniListe;
    });

  }
  useEffect(() => {
    console.log("Güncel ekMalzeme:", ekMalzeme);
  }, [ekMalzeme]);



  function HandleSiparis(e) {
    setSiparisNotu(e.target.value)
    console.log(e.target.value)
  }
  function HandleAdet(e) {
    if (e.target.name == "azalt") {
      if (adet - 1 > 0) {
        setAdet(adet - 1)
      }

    }
    else {
      setAdet(adet + 1)
    }

  }





  return (
    // <PizzaForm boyut={boyut} hamur={hamur} ekMalzeme={ekMalzeme} siparisNotu={siparisNotu} adet={adet} HandleAdet={HandleAdet} HandleSiparis={HandleSiparis} HandleMalzeme={HandleMalzeme} HandleHamur={HandleHamur} HandleBoyut={HandleBoyut} />
    <Sucses/>
    
  )
}

export default App



