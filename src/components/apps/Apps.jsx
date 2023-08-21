import './apps.css';
import appsImg from './../../img/images/vouchers-img.png';
import appstoreImg from './../../img/icons/app-store.png';
import googleplayImg from './../../img/icons/google-play.png'



const Apps = () => {
    return ( <section className="apps">
    <div className="container">
        <div className="apps__content">

        <div className="apps__text">
            <div className="apps__title">
                DOWNLOAD APP & GET THE VOUCHER!
                </div>

                <div className="apps__subtitle">
                Get 30% off for first transaction using
                Rondovision mobile app for now
                </div>

                <div className="apps__btns">
                    <button className="apps__appstore">
                        <a href="#!">
                            <img src={appstoreImg} alt="App Store" />
                        </a>
                    </button>
                    <button className="apps__googleplay">
                    <img src={googleplayImg} alt="Google Play" />
                    </button>
                </div>
        </div>

        <div className="apps__img">
            <img src={appsImg} alt="apps-image" />
        </div>

        </div>
        
    </div>
</section> );
}
 
export default Apps;

