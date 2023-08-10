import { React } from "react";

const Footer = () => {


    return (
        <>
            <footer className="footer text-light wow animate_animated animate__fadeInLeft">
                <div className="container py">
                    <div className="row justify-content-center">
                        <div className="col-3">
                            <div className="contact_us text-light">
                                <a href="#" className="navbar-brand d-inline-block fw-bold text-light mx-5" style={{"letterSpacing" : "3px" , fontSize : "30px"}}>NOXE</a>
                                <div className="d-flex py-5">
                                    <i className="fa-brands fa-vimeo-v mx-3" />
                                    <i className="fa-brands fa-instagram mx-3" />
                                    <i className="fa-brands fa-facebook-f mx-3" />
                                    <i className="fa-brands fa-spotify mx-3" />
                                </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="information text-light">
                            <h5>OUR STUDIO</h5>
                            <ul className="navbar-nav">
                                <li><a href="#" className="nav-link text-light">Services</a></li>
                                <li><a href="#" className="nav-link text-light">Our Works</a></li>
                                <li><a href="#" className="nav-link text-light">Noxe Team</a></li>
                                <li><a href="#" className="nav-link text-light">History</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="Stay_connected text-light">
                            <h5>PAGES</h5>
                            <ul className="navbar-nav">
                                <li><a href="#" className="nav-link text-light">Home</a></li>
                                <li><a href="#" className="nav-link text-light">About Us</a></li>
                                <li><a href="#" className="nav-link text-light">Studio</a></li>
                                <li><a href="#" className="nav-link text-light">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="Links text-light">
                            <h5>NOXE STUDIO</h5>
                            <small className="py-3" style={{ lineHeight: "35px" }}>The Noxe Film Studio <br /> 1518 Noxe Street,
                                Suite 3889<br />California, USA</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}

export default Footer;