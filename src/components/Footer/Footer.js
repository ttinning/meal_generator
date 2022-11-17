import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import Logo from './public/logo_transparent.png';
import './CSS/footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <section> 
                <img className="logo">{Logo}</img>
            </section>
            <section className="social">
                <a href="https://twitter.com" target='_blank' rel="noreferrer"  className="Twitter">
                    <FontAwesomeIcon icon={faTwitter} size='2x' />
                </a>
                <a href="https://www.instagram.com" target='_blank' rel="noreferrer"  className="Instagram">
                    <FontAwesomeIcon icon={faInstagramSquare} size='2x' />
                </a>
            </section>
        </div>
    )
}