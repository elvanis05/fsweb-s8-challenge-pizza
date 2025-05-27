import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Header from './components/header'
import Bannermenu from './components/bannernav'
import Duyurular from './components/duyurular'
import Lezzetlernav from './components/lezzetlernav'
import Lezzetcard from './components/lezzetkartlar'
import FooterSol from './components/footersol'
import FooterOrta from './components/footerorta'
import FooterSag from './components/footersag'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app">

      <Header />

      <Bannermenu />

      <Duyurular/>
      <section className="lezzetler">
        <p className="lezzetler-etiket">en çok paketlenen menüler</p>
        <h2 className="lezzetler-baslik">Acıktıran Kodlara Doyuran Lezzetler</h2>

        <Lezzetlernav/>

        <Lezzetcard/>
      </section>


      <footer className="footer">
        <div className="footer-icerik">

          <FooterSol/>


          <FooterOrta/>


          <FooterSag/>
        </div>

        <div className="footer-alt">
          <p>© 2023 Teknolojik Yemekler.</p>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </footer>
    </div>
  )
}

export default App
