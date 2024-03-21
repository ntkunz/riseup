import './MenuOrderButtons.scss';
import DoordashIcon from '../IconComponents/DoordashIcon';
import UbereatsIcon from '../IconComponents/UbereatsIcon';

export default function MenuOrderButtons() {

   return (
      <div className="menu-buttons__container">
         <h4>Order Online</h4>
         <a className="menu-buttons__button" target="_blank" rel="noreferrer"
            href="https://www.doordash.com/en-CA/store/rise-up-marketplace-vancouver-22918403/">
            Doordash
            <DoordashIcon aria-label="Doordash" className={"menu-buttons__icon"} />
         </a>
         <a className="menu-buttons__button" target="_blank" rel="noreferrer"
            href="https://www.ubereats.com/ca/store/rise-up-marketplace/9G7-p_r2WNKaDWKF6PCtmw">
            <UbereatsIcon aria-label="UberEats" className={"menu-buttons__icon"} />
         </a>
      </div>
   )
}