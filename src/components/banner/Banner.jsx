import './banner.css'
import bannerImg from './../../img/images/promo-img.svg'

const Banner = () => {
    return ( 

        <section className="banner">
                <div className="banner__content">
                    <div className="banner__img">
                        <img src={bannerImg} alt="Img Banner" />
                    </div>

                    <div className="banner__text">
                        <div className="banner__title">
                            <span class="highlight highlight-banner">
                                <span>PAYDAY</span>
                                </span>
                            SALE NOW
                        </div>
                        <div className="banner__description">
                        Spend minimal $100 get 30% off
                        voucher code for your next purchase
                        </div>

                        <div className="banner__date">
                        1 June - 10 June 2021
                        </div>

                        <div className="banner__conditions">
                        *Terms & Conditions apply
                        </div>

                        <div className="banner__btn-wrapper">
                            <a href="#!" className="banner__btn">SHOP NOW</a>
                        </div>
                    </div>
                </div>
        </section>

     );
}
 
export default Banner;