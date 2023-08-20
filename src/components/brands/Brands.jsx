import './brands.css'

import hm from './../../img/brands/HM.svg'
import obey from './../../img/brands/Obey.svg'
import shopify from './../../img/brands/Shopify.svg'
import lacoste from './../../img/brands/Lacoste.svg'
import levis from './../../img/brands/Levis.svg'
import amazon from './../../img/brands/Amazon.svg'


function Brands () {
    return (
        <section className="brands">
            <div className="container">
               <ul className="brands__list">
                <li>
                    <a href="#!"><img src={hm} alt="" /></a>
                </li>
                <li>
                    <a href="#!"><img src={obey} alt="" /></a>
                </li>
                <li>
                    <a href="#!"><img src={shopify} alt="" /></a>
                </li>
                <li>
                    <a href="#!"><img src={lacoste} alt="" /></a>
                </li>
                <li>
                    <a href="#!"><img src={levis} alt="" /></a>
                </li>
                <li>
                    <a href="#!"><img src={amazon} alt="" /></a>
                </li>
               </ul>
            </div>
        </section>

    );
}
 
export default Brands;