import React, { Component,Fragment } from 'react';
class AjoutModal extends Component {

    inittabs = { id:1, modele:"", taille:"",prix:"",image:""};
       state =  this.inittabs;
    ////////////////////////////

    modifiertab =(e)=>{
        const {name,value} =e.target;
        this.setState({[name]: value});
    }


    ////////////////////////////
    envoyertab =(event)=>{
        event.preventDefault();
        this.props.ajouter(this.state);
    }

  

    ////////////////////////////
    render() { 
        const {modele, taille, prix, image} = this.state;
        return ( 
             <Fragment>
{/* <!-- Button to Open the Modal --> */}
{/* +Ajouter */}
                <div className="text-right">
                            <button type="button" className="btn btn-success btn-lg btn-block" data-toggle="modal" data-target="#myModal">
                                <i className="fa fa-plus"></i>  
                                Ajouter
                             </button>
                    </div>
{/* <!-- The Modal --> */}
                    <div className="modal" id="myModal">
                    <div className="modal-dialog">
                    <div className="modal-content">
 {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                            <h4 className="modal-title">Ajouter un Caftan</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

{/* <!-- Modal body --> */}
                    <div className="modal-body">
{/* <!-- Form --> */}
                    <form>
                        <div className="form-group ">
                            <label htmlFor="modele">Modèle :</label>
                            <input type="text" className="form-control" id="modele" name="modele" value={modele} placeholder="Entrez le modèle" onChange={this.modifiertab}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="pays">Taille :</label>
                            <input type="text" className="form-control" id="taille" name="taille" value={taille} placeholder="Entrez le pays" onChange={this.modifiertab}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="image">Prix : €</label>
                            <input type="text" className="form-control" id="prix" name="prix" value={prix} placeholder="Selectionner l'image" onChange={this.modifiertab}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="image">Image :</label>
                            <input type="text" className="form-control" id="image" name="image" value={image} placeholder="Selectionner l'image" onChange={this.modifiertab}/>
                        </div>
                        <br/>
                        <button type="button" className="btn btn-primary btn-block" onClick={this.envoyertab} data-dismiss="modal">Soumettre</button>
                    </form>
                                </div>

                        </div>
                    </div>
                    <div className="col-md-8">
                        meteo
                    </div>

                    </div>
            </Fragment>
         );
    }

}
 
export default AjoutModal;