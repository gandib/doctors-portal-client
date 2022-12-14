import React from 'react';
import bgFooter from '../../images/images/footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-10"
            style={{
                background: `url(${bgFooter})`,
                backgroundSize: 'cover'
            }}>
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='' className="link link-hover">Emergency Checkup</Link>
                    <Link to='' className="link link-hover">Monthly Checkup</Link>
                    <Link to='' className="link link-hover">Weekly Checkup</Link>
                    <Link to='' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='' className="link link-hover">Cavity Filling</Link>
                    <Link to='' className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <p>New York - 101010 Hudson</p>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright &copy; {new Date().getFullYear()} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;