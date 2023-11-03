import "./Footer.scss";
import FacebookIcon from '../IconComponents/FacebookIcon';
import InstagramIcon from '../IconComponents/InstagramIcon';
import DoordashIcon from '../IconComponents/DoordashIcon';

export default function Footer() {
   return (
      <div className="footer">

         <h3 className="footer__details">Making Community Convenient</h3>

         <div className="footer__store-details">
            <h4 className="footer__details">704 Vernon Dr, Vancouver, BC</h4>
            <h4 className="footer__details">Mon - Fri 9-6 , Sat 10-4</h4>
         </div>



         <div className="footer__social-container">
            <a className="footer__social-link" target="_blank" rel="noreferrer" href="https://www.facebook.com/riseupmarketplace/">
               <FacebookIcon />
            </a>
            <a className="footer__social-link" target="_blank" rel="noreferrer" href="https://www.doordash.com/en-CA/store/rise-up-marketplace-vancouver-22918403/">
               <DoordashIcon />
            </a>
            <a className="footer__social-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/riseupmarketplace/?hl=en">
               <InstagramIcon />
            </a>
         </div>
      </div>
   )
}