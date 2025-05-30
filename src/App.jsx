import "./App.css"
import PizzaForm from './components/form'
import React, { useState, useEffect } from "react";
import Sucses from './components/sucses';
import MainPage from "./components/mainpage";
import axios from "axios";


function App() {
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("Hamur Kalınlığı");
  const [ekMalzeme, setEkMalzeme] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState("");
  const [adet, setAdet] = useState(1);
  const [page, setPage] = useState("Ana sayfa")
  const [createdTime, setCreatedTime] = useState("")

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

  function SwapPage() {
    if (page == "Ana sayfa") {
      return (<><MainPage SwapFunc={SwapFunc} /></>)

    }
    else if (page == "Form") {
      return (
        <>
          <PizzaForm boyut={boyut} hamur={hamur} ekMalzeme={ekMalzeme} siparisNotu={siparisNotu} adet={adet} HandleAdet={HandleAdet} HandleSiparis={HandleSiparis} HandleMalzeme={HandleMalzeme} HandleHamur={HandleHamur} HandleBoyut={HandleBoyut} handleSubmit={handleSubmit} />
        </>
      )
    }
    else {
      return (<Sucses ekMalzeme={ekMalzeme} hamur={hamur} boyut={boyut} adet={adet} createdTime={createdTime} />)
    }
  }
  async function getAxiosRes() {
    await axios.post("https://reqres.in/api/pizza", { hamur: hamur, boyut: boyut, eksecim: ekMalzeme },
      {
        headers: {
          "x-api-key": "reqres-free-v1"
        }
      }
    ).then(res => {
      console.log(res.data)
      const date = new Date(res.data.createdAt);
      const formattedDate = date.toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Europe/Istanbul'
      });
      setCreatedTime(formattedDate);
        setPage("Success");
    })
      .catch(err => {
        console.log(err)
        setPage("Ana sayfa");
      })
  }

  function SwapFunc(x) {
    setPage(x)
  }
  //HANDLE SUBMİT FUNC
  function handleSubmit(e) {
    e.preventDefault();

    if (!boyut) {
      alert("Lütfen bir boyut seçin.");
      return;
    }
    if (hamur === "Hamur Kalınlığı") {
      alert("Lütfen hamur kalınlığı seçin.");
      return;
    }
    if (ekMalzeme.length < 4) {
      alert("Lütfen en az 4 malzeme seçin.");
      return;
    }

    getAxiosRes();
  
  }







  return (
    <>
      {SwapPage()}
      
    </>

  )
}

export default App



