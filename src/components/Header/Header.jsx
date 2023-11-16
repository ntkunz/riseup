import "./Header.scss";
import logoColorPNG from "/logos/layer-MC3.png";

export default function Header() {
   return (
      <header className="header">
         <div className="header__text-container">
            <h1 className="header__title">RiseUp MarketPlace</h1>
            <img src={logoColorPNG} alt="RiseUp Marketplace logo laid over image of the store" className="header__logo" />
            <div className="header__details-container">

               <time className="header__details"><p>Monday - Friday 9-6 , Sat 10-4</p></time>
               <address className="header__details"><p>704 Vernon Dr. Vancouver, BC</p></address>
            </div>
         </div>
         <img className="header__image" src="/images/riseup-marketplace-front-view.jpg" alt="Photography of the front of Rise Up MarketPlace" />
      </header>
   )
}