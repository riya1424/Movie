import { React } from "react";
import {useNavigate} from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {

    let navigate = useNavigate();

    const login = () => {
        navigate("/login");
    }
    return (
        <>
            <header className="navbar navbar-expand-lg py-3 wow animate__animated animate__fadeInDown position-fixed" style={{"backgroundColor" : "#000000"}}>
                <div className="container align-items-center">
                    <div className="logo">
                        <a href="#" className="navbar-brand d-inline-block fw-bold text-light" style={{ letterSpacing: 2 }}>NOXE</a>
                    </div>
                    <div className="order-lg-1 d-flex">
                        <button className="rounded-2 navbar-toggler me-2 py-2" data-bs-toggle="collapse" data-bs-target="#menu">
                            <span className="navbar-toggler-icon">
                            </span>
                        </button>
                    </div>
                    <nav id="menu" className="navbar-collapse justify-content-end align-items-center">
                        <ul className="navbar-nav">
                            <li><NavLink to="/" className="nav-link me-4 menu text-light fw-normal">HOME</NavLink></li>
                            <li><a href="#" className="nav-link me-4 menu text-light fw-normal">MOVIES</a></li>
                            <li><a href="#" className="nav-link me-4 menu text-light fw-normal">STREAM</a></li>
                            <li><a href="#" className="nav-link me-4 menu text-light fw-normal">TV SHOWS</a></li>
                            <li><a href="#" className="nav-link me-4 menu text-light fw-normal">CELEBS</a></li>
                            <li><a href="#" className="nav-link me-4 menu text-light fw-normal">BLOG</a></li>
                            <button onClick={login} className="b-btn btn-sm btn-light rounded-2"><i className="fa-solid fa-user"/></button>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header;