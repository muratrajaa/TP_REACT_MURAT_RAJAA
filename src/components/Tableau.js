import React from 'react';


const Tableau = (props) => {
    return ( 

        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th>Reference</th>
                    <th>Modele</th>
                    <th>Taille</th>
                    <th>Prix</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.details ? props.details.map((detail, index)=>{
                        return(
                    <tr key={index}>
                        <td>{detail.ref}</td>
                        <td>{detail.modele}</td>
                        <td>{detail.taille}</td>
                        <td>{detail.prix}</td>
                        <td>
                           <img src={process.env.PUBLIC_URL + '/images/'+detail.image} width="200"alt={detail.image}/>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>
                            { if(window.confirm('Etes vous sûr de Supprimer!'))
                            {props.delete(index)};

                            }
                            
                            }>
                                <i className="fa fa-trash">Supprimer</i>
                                    
                            </button>
                        </td>
                </tr>
                        )
                })
            : "données non disponible"}
        </tbody>

    </table>
   );

 }

export default Tableau;

