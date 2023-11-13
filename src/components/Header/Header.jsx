import "./Header.scss";
import MainLogo from "../../components/MainLogo/MainLogo";

export default function Header() {
   return (
      <header className="header">
         <MainLogo />
         <div className="header__text-container">
            <h1 className="header__title">RiseUp MarketPlace</h1>
            <div className="header__deatils-container">
               <time className="header__details">Monday - Friday 9-6 , Sat 10-4</time>
               <address className="header__details">704 Vernon Dr. Vancouver, BC</address>
            </div>
         </div>
         <img className="header__image" src="/images/riseup-marketplace-front-view.jpg" alt="Photography of the front of Rise Up MarketPlace" />
      </header>
   )
}