import "./MainLogo.scss";
import logoColor from '/logos/riseup-logo-color.png';
import logoMonochrome from '/logos/riseup-logo-monochrome.png';
export default function MainLogo() {
   return (
      <>
         <img src={logoColor} alt="layered RiseUp Marketplace logo for glowing effect in color" className="riseup-logo-4" />
         <img src={logoMonochrome} alt="layered RiseUp Marketplace logo for glowing effect in monochrome" className="riseup-logo-4" aria-hidden="true" />
         <img src={logoMonochrome} alt="layered RiseUp Marketplace logo for glowing effect in monochrome" className="riseup-logo-3" aria-hidden="true" />
         <img src={logoMonochrome} alt="layered RiseUp Marketplace logo for glowing effect in monochrome" className="riseup-logo-2" aria-hidden="true" />
         <img src={logoColor} alt="layered RiseUp Marketplace logo for glowing effect in color" className="riseup-logo" aria-hidden="true" />
      </>
   )
}