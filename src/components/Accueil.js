import React, {Fragment}from 'react';
import Logo from './images/logo.png'
import Carrousel1 from './images/carrousel2.jpeg'
 import Carrousel2 from './images/bann.png'
 import Carrousel3 from './images/carrousel.jpeg'




const Accueil =()=>{
    // localstorage
    const stockage1 = JSON.parse(localStorage.getItem('tabs'))
    let test =false;
    let test2 = false;
    if(stockage1){
       test = true;
    }
    if(test && stockage1.length > 0){
       test2= true;
    }




     return (
        <Fragment>
             {/* Logo + slug */}
                    <img className="offset-3 col-md-6" src={Logo} width="100" heigth="100"alt=""/>
            <hr/>
            {/* card */}
            {/* carrousel */}
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img class="d-block w-100" src={Carrousel1}  alt="First slide" width="200" height="200"/>
                            </div>
                             <div class="carousel-item">
                            <img class="d-block w-100" src={Carrousel2}  alt="Second slide" width="200" height="200"/>
                            </div>
                           <div class="carousel-item">
                            <img class="d-block w-100" src={Carrousel3}  alt="Third slide" width="200"height="200"/>
                            </div> 
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        </div>
            {/* fin carousel */}
            <hr/>
            <h1 style={{fontSize:'36pt', color:'rgb(82, 51, 16)', fontFamily:'Cormorant Upright'}} className="lead text-center font-weight-bold ">Élegante avec une touche Marocaine</h1>

           
                        <div className="row">
                            <div className="offset-3 col-md-6">
                            <div className="row row-cols-2 row-cols-md-2">
                        {test2 ? stockage1.map((detail,index)=>{
                            return(
                                <div className=" col mb-4" key={index}>
                                <div className="card">
                                <img src={process.env.PUBLIC_URL + '/images/'+detail.image} alt={detail.image} height="600" className="card-img-top"/>
                                    <div className="card-body">
                                        <h5>Ref n°00{detail.id}</h5>
                                <ul className="list-group list-group-sm">
                                    <li className="list-group-item">Modele :{detail.modele}</li>
                                    <li className="list-group-item">Taille: {detail.taille}</li>
                                    <li className="list-group-item">Prix: {detail.prix}</li>
                                </ul>
                            </div>
                         </div>
                    </div>
             
             );
            })
            : "Pas de Caftan disponible."
            }
                </div>
            </div>
              
        </div>
  
        </Fragment>
     )}
 
 export default Accueil;