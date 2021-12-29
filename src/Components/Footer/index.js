import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer >
      <div className="container">
        <div className="row">
          <div className="col py-5 ml-3">
            <h4>Leah Glasscock Photography</h4>
            <p>From newborn to graduation</p>
          </div>
          <div className="col text-center py-5">
            <h4>Links</h4>   
            <ul className="list-unstyled">
              <li><Link to='/investment'>Investment</Link></li>
              <li><Link to='/portfolio'>Portfolio</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
          <div className="col text-center py-5">
            <div>
              <h4>Get in Touch</h4>
              <div>
                <a href="tel:+12065551234"><i className="fa fa-phone"></i> 1-253-555-1234</a><br />
                <a href="mailto:leah@leahglasscock.com"><i className="fa fa-envelope-o"></i> leah@leahglasscock.com</a>
              </div>  
            </div>             
          </div>   
        </div>          
      </div>
    </footer>
  )
}

export default Footer