import "./MainLogo.scss";
import logoColor from '/logos/riseup-logo-color.png';
import logoMonochrome from '/logos/riseup-logo-monochrome.png';
export default function MainLogo() {
   return (
      <>
         {/* <img src={logoMonochrome} alt="" className="riseup-logo-4" />
         <img src={logoMonochrome} alt="" className="riseup-logo-4" /> */}
         <img src={logoColor} alt="" className="riseup-logo-4" />
         <img src={logoMonochrome} alt="" className="riseup-logo-4" />
         <img src={logoMonochrome} alt="" className="riseup-logo-3" />
         <img src={logoMonochrome} alt="" className="riseup-logo-2" />
         <img src={logoColor} alt="" className="riseup-logo" />
      </>
   )
}