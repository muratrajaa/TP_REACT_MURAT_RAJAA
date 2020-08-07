import React, { Component,Fragment } from 'react';
import Tableau from './Tableau'
import Logo from './images/logo.png'
import AjoutModal from './AjoutModal'

class Admin extends Component {
        state = { 
           tabs :[
                {id:1, modele:"Caftan Mobra Noir", taille:"S/M",prix:"110,00 €", image:"caftna-noir-velours.jpg"},
                {id :2, modele:"Caftan Mobra Blue", taille:"S/L",prix:"80,00", image:"caftan-velour4.jpg"},
                {id :3, modele:"Caftan Matrouz", taille:"S/M",prix:"130,00 €", image:"caftan-noir.jpg"},
                {id :4, modele:"Tekchita Pink", taille:"M/L",prix:"100,00 €", image:"caftan-saumon-perlé1.png"},
                {id :5, modele:"Caftan Mtrouz Chibi",taille:"S/M",prix:"75,00 €", image:"caftan-beige.jpg"},
                {id :6, modele:"Caftan Matrouz Kaki",taille:"S/M",prix:"160,00 €", image:"caftan-vertkaki.jpg"},
                {id :7, modele:"Caftan Jawhara Bleu",taille:"S/M",prix:"100,00 €", image:"caftan-blueMarine.png"},
               {id :7, modele:"Caftan Jawhara Bleu",taille:"S/M",prix:"100,00 €", image:"caftan-blue.jpg"} 
           
            ]
         }
        /// localstorage
         componentDidMount =()=>{
                if(!localStorage.getItem('tabs')){
                    localStorage.setItem('tabs', JSON.stringify(this.state.tabs))
                }else{
                    let stockage = JSON.parse(localStorage.getItem('tabs'));
                    this.setState({tabs :stockage})
                }
         }



         ///  supprimer un élément d tableau admin
            handleDelete =(index)=>{
             const{tabs} =this.state
             this.setState({tabs : tabs.filter((d,i)=>{
                 return i!==index

                })
                },

        ////  stocker les ajouts dans localstorgae
        function(){
            localStorage.setItem('tabs', JSON.stringify(this.state.tabs))
        })
    }
        //// ajouter un élément dans le tableau admin 
        
            hendleAdd  = (newtabs) =>{
                if(this.state.tabs.length)
                newtabs.id = (this.state.tabs[this.state.tabs.length -1].id+1)/// ajouter l id en ajoutant une nouvelle voiture
               this.setState({tabs:[...this.state.tabs, newtabs]},
               function(){
                   localStorage.setItem('tabs',JSON.stringify(this.state.tabs));
               })
            
           }
            
    
         ///////////////
    render() { 
        return ( 
            <Fragment>
                <img className="offset-3 col-md-6" src={Logo} width="150" heigth="200"alt=""/>
                <Tableau  details={this.state.tabs}  delete={this.handleDelete}/>
                <AjoutModal ajouter ={this.hendleAdd}/>
            
            </Fragment>
         );
    }
}
 
export default Admin;






























// import React,{Component, Fragment} from 'react';

// class Admin extends Component {

    
//     state = { 
//         datas:[
//             {id:1, marque:'Peugeot',modele:'208',pays:'France', image:'208.jpg'},
//             {id:2, marque:'Peugeot',modele:'Clio4',pays:'France', image:'Mercedess.jpg'},
//             {id:3, marque:'Tesla',modele:'x',pays:'Usa', image:'Tesla.jpg'},
//             {id:4, marque:'Bmw',modele:'M5',pays:'Allemagne', image:'Bmw.jpg'},
            
//         ],
//         noveauData : ""
//     } 
      
// /// chnager la

//  /////////////: supprimer une voiture  
// handleDelete =(id)=>{
//      const newdata = this.state.datas.splice();     //faire une copie du tableau
//      const index = newdata.findIndex((datas)=>       //// findIndex trouver l'index de la personne qui corresppond a l'id sur le quel jai clique
//       newdata.id === id                     //// le client sur le uel je clique son id et le  meme ds mon tableau
//      );
//      newdata.splice(index, 1);                      ///splice() supprimer on partant de l'index 1 element

//      this.setState({datas : newdata})               /// modifier mon state 
//  //console.log(id) quand je clique ça m'envoie id supprimer


// ///////////Ajouter une voiture

// }

// handleSubmit =(event)=> {
//    event.preventDefault();  
//    const id = new Date().getTime(); /// au moment de la saisie new id
//    const marque= this.state.noveauData; /// 
//    const tab = ({marque:marque});
//    const tabs = this.state.datas.slice();
//    tabs.push(tab)
//    this.setState({datas: tabs})
//    /// gerer la soumission et pour que la page ne se recharge pas 
//    //console.log(this.dataInput.current.value);   recupere la valeur entree avec ref={this.dataInput} dans input et declarer 9a dans la class   dataInput = React.createRef();
// }
// /// pour recup la val champ input et l'afficher
// handleChange = (event)=>{
//     const value = event.currentTarget.value;
//     this.setState({noveauData : value})
//  //console.log(event.currentTarget.value)/// va avc handelchange dans inout recup la valeuur entree
// }
    
//     }
    
// export default Admin; 