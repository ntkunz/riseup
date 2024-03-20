import "./Menu.scss";
import menuData from '../../assets/data/menuData.js';
import MenuCategory from "../MenuCategory/MenuCategory";
import MenuOrderButtons from "../MenuOrderButtons/MenuOrderButtons";
import Catering from "../Catering/Catering";

export default function Menu() {
   return (
      <section className="menu">
         <h2 className="menu__title">MENU</h2>

         <MenuOrderButtons />

         <Catering />

         {menuData.map((menuSection) => (
            <div key={menuSection.category} >
               <h3 className="menu__subtitle">{menuSection.category}</h3>
               <div className="menu__item-container">
                  <MenuCategory menuSectionItems={menuSection.items} />
               </div>
            </div>
         ))}
      </section>
   )
}