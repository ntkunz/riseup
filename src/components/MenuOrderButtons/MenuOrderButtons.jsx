import './MenuOrderButtons.scss';

export default function MenuOrderButtons() {

   return (
      <div className="menu-buttons__container">
         <h4>Order Online</h4>
         <a className="menu-buttons__button" target="_blank" rel="noreferrer"
            href="https://www.doordash.com/en-CA/store/rise-up-marketplace-vancouver-22918403/">DoorDash</a>
         <a className="menu-buttons__button" target="_blank" rel="noreferrer"
            href="https://www.ubereats.com/ca/store/rise-up-marketplace/9G7-p_r2WNKaDWKF6PCtmw">UberEats</a>
      </div>
   )
}