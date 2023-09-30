import "./Header.scss";

export default function Header() {
   return (
      <header className="header">
         <div className="header__details-container">
            <h3 className="header__details">704 Vernon Dr,</h3>
            <h3 className="header__details">Vancouver, BC</h3>
            <h3 className="header__details">Mon - Fri 9-6</h3>
            <h3 className="header__details">Sat 10-4</h3>
         </div>
      </header>
   )
}

// <section className="tagline">
// <h2 className="tagline__text">Making community convenient</h2>
// </section>