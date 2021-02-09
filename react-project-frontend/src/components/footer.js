import React from "react";
import { Link } from 'react-router-dom';


const Footer = () => (
    <div class="img-container">
        <footer className="bg-dark p-3 text-center">
                        <div className="container">
                        <div className="row">             
                            <div className="col-4 col-sm-2 offset-1">
                                <h5>Links</h5>
                                <ul className="list-unstyled">
                                    <li><Link to='/home'>Home</Link></li>
                                    <li><Link to='/directory'>Directory</Link></li>
                                    <li><Link to='/aboutus'>About</Link></li>
                                    <li><Link to='/contactus'>Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-6 text-center">
                                <h5>Social</h5>
                                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                            </div>
                            <div className="col text-center">
                                <a role="button" className="btn btn-link" href="tel:+1-222-333-4444"><i className="fa fa-phone" /> 1-222-333-4444</a><br />
                                <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> travel0</a>
                            </div>
                        </div>
                    </div>
        </footer>
  </div>
);

export default Footer;
