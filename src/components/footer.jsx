import FooterSol from './/footersol'
import FooterOrta from './footerorta'
import FooterSag from './footersag'

function Footer () {
    return ( <footer className="footer">
        <div className="footer-icerik">

          <FooterSol/>


          <FooterOrta/>


          <FooterSag/>
        </div>

        <div className="footer-alt">
          <p>© 2023 Teknolojik Yemekler.</p>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </footer> );
}

export default Footer ;