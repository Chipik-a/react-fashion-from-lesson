
import './favourite.css';
import Card from '../card/Card';

import fav01Img from './../../img/images/01.jpg'
import fav02Img from './../../img/images/02.jpg'

const Favourite = () => {
    return ( 
        <section className="favourite">
            <div className="container">
                <div className="favourite__header">
                    <h2 className="title-2">
                    Young’s Favourite
                    </h2>
                </div>
                
                <div className="favourite__cards">
                    <Card title="Hoodies & Sweetshirt" img={fav01Img} /> 
                    <Card title="Coats & Parkas" img={fav02Img}/>
                </div>
            </div>
        </section>
    );
}
 
export default Favourite;