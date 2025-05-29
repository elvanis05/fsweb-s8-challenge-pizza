

import Header from './header'
import Bannermenu from './bannernav'
import Duyurular from './duyurular'
import Lezzetlernav from './lezzetlernav'
import Lezzetcard from './lezzetkartlar'
import Footer from './footer'



function MainPage() {
  return (<div id="app">

    <Header />

    <Bannermenu />



    <Duyurular />
    <section className="lezzetler">
      <p className="lezzetler-etiket">en çok paketlenen menüler</p>
      <h2 className="lezzetler-baslik">Acıktıran Kodlara Doyuran Lezzetler</h2>

      <Lezzetlernav />

      <Lezzetcard />
    </section>

    <Footer/>

  </div>);
}

export default MainPage;