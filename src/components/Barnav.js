import React from 'react';
import Accueil from './Accueil'
import Admin from './Admin'
import Logo from './images/logo.png'


import {
     BrowserRouter as Router,Route, Switch, Link } from 'react-router-dom';


const Barnav = () => {
    return (
        <Router>
        <nav className="navbar navbar-dark bg-dark">
                    
            <Link className="navbar-brand" to="/"><img src={Logo} width="100" heigth="30"alt=""/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <Link className="nav-link" to="/">Accueil <span className="sr-only">(current)</span></Link>
                    </li>
                   
                    <li>
                        <Link  className="nav-link" to="/admin1989">Administration</Link>
                    </li>
                </ul>
            </div>
        </nav>

       <Switch>
           <Route exact path="/">
               <Accueil/>
           </Route>
           <Route path="/admin1989">
               <Admin/>
           </Route>
       </Switch>
        </Router>
      );
}
 
export default Barnav;

/// import le link avec import apres englober le tout dans la balise  ajouter le to="/contact..."(voir nav.js) a la place de href dans les liens" dans les switch on defini la route de la page ecrire les condition
//Switch nous permet de changer en cliquant sur un élément  à charger la page appelé mettre la bar de navigation dans <Router>