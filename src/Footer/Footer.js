import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Footer.css';

const Footer = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Connect With Us</h5>
                        <ul className="social-list">
                            <li className="social-icon"><a><InstagramIcon fontSize="large" className="MuiIcon-fontSizeLarge" /></a></li>
                            <li className="social-icon"><a><TwitterIcon fontSize="large" className="MuiIcon-fontSizeLarge" /></a></li>
                            <li className="social-icon"><a><FacebookIcon fontSize="large" className="MuiIcon-fontSizeLarge" /></a></li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <ul className="link-list">
                            <li className="list-unstyled"><Link className="footer-nav-link" to="/tops">Tops</Link></li>
                            <li className="list-unstyled"><Link className="footer-nav-link" to="/bottoms">Bottoms</Link></li>
                            <li className="list-unstyled"><Link className="footer-nav-link" to="/bras">Sports Bras</Link></li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: Madison Leopold
                </MDBContainer>
            </div>
        </MDBFooter >
    );
}

export default Footer;