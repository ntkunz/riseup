export default function MenuCategory(menuSectionItems) {

   return (
      <>
         {menuSectionItems.menuSectionItems.map((item, index) => (
            <div className="menu__category" key={index}>
               <div className="menu__item-header-container">
                  <h4 className="menu__item-title">{item.title}</h4>
                  <p className="menu__item-price">{item.price}</p>
               </div>
               {item.image &&
                  <img src={item.image} className="menu__image" alt={`Menu item ${item.title} from riseup marketplace`} />
               }
               <p className="menu__item-description" dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </div>
         ))}
      </>
   );
}