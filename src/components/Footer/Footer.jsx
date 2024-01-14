import "./Footer.scss";
import FacebookIcon from '../IconComponents/FacebookIcon';
import InstagramIcon from '../IconComponents/InstagramIcon';
import DoordashIcon from '../IconComponents/DoordashIcon';
import UbereatsIcon from '../IconComponents/UbereatsIcon';

export default function Footer() {
   return (
      <footer className="footer" role="contentinfo">

         <h3 className="footer__phrase">Making Community Convenient</h3>

         <div className="footer__store-details">
            <h4 className="footer__details">704 Vernon Dr, Vancouver, BC</h4>
            <h4 className="footer__details">Mon - Fri 9-6 , Sat 10-4</h4>
            <p><a className="footer__contact-link" href="mailto:roger@riseuponelove.com">contact@riseuponelove.com</a></p>
         </div>



         <div className="footer__social-container">
            <a className="footer__social-link" target="_blank" rel="noreferrer"
               href="https://www.facebook.com/riseupmarketplace/">
               <FacebookIcon aria-label="Facebook" />
            </a>
            <a className="footer__social-link" target="_blank" rel="noreferrer"
               href="https://www.doordash.com/en-CA/store/rise-up-marketplace-vancouver-22918403/">
               <DoordashIcon className={"social-icon"} aria-label="Doordash" />
            </a>
            <a className="footer__social-link" target="_blank" rel="noreferrer"
               href="https://www.ubereats.com/ca/store/rise-up-marketplace/9G7-p_r2WNKaDWKF6PCtmw">
               <UbereatsIcon className={"social-icon"} aria-label="UberEats" />
            </a>
            <a className="footer__social-link" target="_blank" rel="noreferrer"
               href="https://www.instagram.com/riseupmarketplace/?hl=en">
               <InstagramIcon aria-label="Instagram" />
            </a>
         </div>
      </footer>
   )
}