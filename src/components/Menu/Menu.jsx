import "./Menu.scss";
import { useState } from "react";

export default function Menu() {

   const [menu, setMenu] = useState('food');

   return (
      <section className="menu">
         <h2 className="menu__title">MENU</h2>

         <div className="menu__container">
            <div className="menu__navbar">
               <button className={menu === 'food' ? 'menu__button active' : 'menu__button'} onClick={() => setMenu('food')}><h4>Food</h4></button>
               <button className={menu === 'drinks' ? 'menu__button active' : 'menu__button'} onClick={() => setMenu('drinks')}><h4>Drinks</h4></button>
               <button className={menu === 'baked' ? 'menu__button active' : 'menu__button'} onClick={() => setMenu('baked')}><h4>Baked</h4></button>
            </div>

            {menu === 'food' && <div className="menu__food">

               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Jerk Chicken Sandwich</h3>
                     <p className="menu__item-price">$10.50</p>
                  </div>
                  <p className="menu__item-description">House marinated jerk chicken and a mango or kale coleslaw on a rosemary sourdough bread, served with plantain chips.</p>
               </div>
               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Sloppy George Sandwich</h3>
                     <p className="menu__item-price">$10</p>
                  </div>
                  <p className="menu__item-description">Vegan. House made vegan Sloppy Joe mix with a mango or kale coleslaw on a rosemary sourdough bread, served with plantain chips.</p>
               </div>

               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Grilled Cheese</h3>
                     <p className="menu__item-price">$10</p>
                  </div>
                  <p className="menu__item-description">Havarti, Cheddar and Gruyère cheese with Roma tomatoes and seasoning on a rosemary sourdough bread, served with plantain chips.</p>
               </div>

               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Rise Up Salad</h3>
                     <p className="menu__item-price">$6.50</p>
                  </div>
                  <p className="menu__item-description">Mixed greens, cucumbers, strawberries, cranberries , pumpkin seeds and a lemon balsamic dressing.</p>
               </div>

               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Jamaican Patties</h3>
                     <p className="menu__item-price">$4.75</p>
                  </div>
                  <p className="menu__item-description">Beef, Chicken, or Veggie patties</p>
               </div>

               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Daily Soup</h3>
                     <p className="menu__item-price">$6.50</p>
                  </div>
                  <p className="menu__item-description">A savoury soup of the day provided by Kula Kitchen!</p>
               </div>

            </div>}


            {menu === 'drinks' && <div className="menu__drinks">

               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Coffee or Hot Cocoa</h3>
                     <p className="menu__item-price">$3.75</p>
                  </div>
                  <p className="menu__item-description">Freshly made</p>
               </div>

               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Tea</h3>
                     <p className="menu__item-price">$3.50</p>
                  </div>
                  <p className="menu__item-description">Freshly made</p>
               </div>

               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Ting</h3>
                     <p className="menu__item-price">$3</p>
                  </div>
                  <p className="menu__item-description">Carribbean Ting soda</p>
               </div>

               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Coconut Water</h3>
                     <p className="menu__item-price">$2.50</p>
                  </div>
                  <p className="menu__item-description">Grace coconut water</p>
               </div>

               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Jarritos Mexican Soda</h3>
                     <p className="menu__item-price">$3</p>
                  </div>
                  <p className="menu__item-description">Mexican soda in Cola, Lime, Pineapple, and Guava flavours</p>
               </div>

               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">A&W Root Beer</h3>
                     <p className="menu__item-price">$3</p>
                  </div>
                  <p className="menu__item-description">A classic root beer</p>
               </div>
            </div>}


            {menu === 'baked' && <div className="menu__food">
               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Coco Bun</h3>
                     <p className="menu__item-price">$2.75</p>
                  </div>
                  <p className="menu__item-description">The perfect compliment to your patty! Warm and toasty, with a light hint of Kula Kitchen red pepper sauce to bring you back to the island!</p>
               </div>

               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Cookies</h3>
                     <p className="menu__item-price">$1</p>
                  </div>
                  <p className="menu__item-description">Choose from Cherry Vanilla, Chocolate, or Snickerdoodle</p>
               </div>

               <div className="menu__item-container">
                  <div className="menu__item-header">
                     <h3 className="menu__item-title">Bread Loaf</h3>
                     <p className="menu__item-price"></p>
                  </div>
                  <p className="menu__item-description">Freshly in-house baked bread (when available)</p>
               </div>

            </div>}
         </div>
      </section>
   )
}