import './footer.css';
import fbImg from './../../img/socials/fb.svg'
import instImg from './../../img/socials/inst.svg'
import twImg from './../../img/socials/tw.svg'
import lnImg from './../../img/socials/in.svg'

const Footer = () => {
    return ( 
        <section className="footer">
            <div className="container">
                <div className="footer__content">

                    <div className="footer__info">
                        <div className="footer__title">Fashion</div>
                        <div className="footer__text">
                        Complete your style with awesome clothes from us.
                        </div>
                        <div className="footer__socials">
                            <a href="#!">
                                <img src={fbImg} alt="facebook" />
                            </a>
                            <a href="#!">
                                <img src={instImg} alt="instagram" />
                            </a>
                            <a href="#!">
                                <img src={twImg} alt="twitter" />
                            </a>
                            <a href="#!">
                                <img src={lnImg} alt="linkedin" />
                            </a>
                        </div>
                    </div>


                    <div className="footer_map">
                        <ul className="footer__links-title">
                            <p className="links-title">Company</p>
                                <a href="#!">
                                <li className="footer__links">About</li>
                                </a>
                                <a href="#!">
                                <li className="footer__links">Contact us</li>
                                </a>
                                <a href="#!">
                                <li className="footer__links">Support</li>
                                </a>
                                <a href="#!">
                                <li className="footer__links">Careers</li>
                                </a>    
                            </ul>

                            <ul className="footer__links-title">
                            <p className="links-title">Quick Link</p>
                            <a href="#!">
                                <li className="footer__links">Share Location</li>
                            </a>
                            <a href="#!">
                                <li className="footer__links">Orders Tracking</li>
                            </a>
                            <a href="#!">
                            <li className="footer__links">Size Guide</li>
                            </a>
                            <a href="#!">
                            <li className="footer__links">FAQs</li>
                            </a>
                            </ul>

                            <ul className="footer__links-title">
                            <p className="links-title">Legal</p>
                                <a href="#!">
                                <li className="footer__links">Terms & conditions</li>
                                </a>
                                <a href="#!">
                                <li className="footer__links">Privacy Policy</li>
                                </a>
                
                            </ul>
                    </div>

                </div>

            </div>
        </section>
     );
}
 
export default Footer;