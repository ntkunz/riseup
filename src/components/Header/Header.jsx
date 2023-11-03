import "./Header.scss";
import MainLogo from "../../components/MainLogo/MainLogo";

export default function Header() {
   return (
      <header className="header">
         <MainLogo />
         <div className="header__text-container">
            <h1 className="header__title">RiseUp MarketPlace</h1>
            <div className="header__deatils-container">
               <h3 className="header__details">Monday - Friday 9-6 , Sat 10-4</h3>
               <h3 className="header__details">704 Vernon Dr. Vancouver, BC</h3>
            </div>
            <img className="header__image" src="/images/riseup-marketplace-front-view.jpg" alt="Photography of the front of Rise Up MarketPlace" />

            {/* <h3 className="header__details">704 Vernon Dr,</h3>
            <h3 className="header__details">Vancouver, BC</h3>
            <h3 className="header__details">Mon - Fri 9-6</h3>
            <h3 className="header__details">Sat 10-4</h3> */}
         </div>
      </header>
   )
}

// <section className="tagline">
// <h2 className="tagline__text">Making community convenient</h2>
// </section>