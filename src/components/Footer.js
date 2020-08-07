import React, { Fragment } from 'react';

import Facebook from './images/facebook-log.png'
import Instagram from './images/insta-log.png'
const Footer = () => {
    return ( 
        <Fragment>
              <div className="">
                <nav className="navbar navbar-dark bg-dark "> 
                  <p className="offset-md-5 text-white" >Copyrigth&copy; 2020 -tous droits réservés</p>
                    <div className="col-md-6">
                        <a href=""> <img src={Facebook}/></a>
                        <a href=""> <img  src={Instagram}/></a>
                    </div>
                <a href="#top" className="text-white"><i className="fa fa-angle-up" style={{borderRadius:'10%', border:'2px solid'}}></i></a>
                 </nav>
                </div>
        </Fragment>
     );
}
 
export default Footer;