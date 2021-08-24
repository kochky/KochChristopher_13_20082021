import { Link } from "react-router-dom"
import React from 'react';

function ErrorPage(){
    return ( 
        <div className="errorcontainer">
            <div className="errortitle">404</div>
            <div className="erroroups">Oups! La page que vous demandez n'existe pas.</div>
            <Link className="errorlink" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default ErrorPage