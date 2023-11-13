import "./Header.scss";
// import MainLogo from "../../components/MainLogo/MainLogo";
import logoOutlined from "/logos/logo-black-blur-background-medium.png";
import logoColor from "/logos/riseup-logo-color-black-marketplace.png";
import svgLogo from "/logos/riseup-logo-color.svg";
import logoColorPNG from "/logos/layer-MC3.png";

export default function Header() {
   return (
      <header className="header">
         <div className="header__text-container">
            {/* <h1 className="header__title">RiseUp MarketPlace</h1> */}
            <img src={logoColorPNG} alt="RiseUp Marketplace logo laid over image of the store" className="header__logo" />
            <div className="header__details-container">

               <time className="header__details">Monday - Friday 9-6 , Sat 10-4</time>
               <address className="header__details">704 Vernon Dr. Vancouver, BC</address>
            </div>
         </div>
         <img className="header__image" src="/images/riseup-marketplace-front-view.jpg" alt="Photography of the front of Rise Up MarketPlace" />
      </header>
   )
}