import React from 'react'
import { Link } from "react-router-dom"
export const Navigation = () => {
    return (
        <div className="navigation">
            <img src="https://static.vecteezy.com/ti/vecteur-libre/t2/620081-logo-de-film-et-modele-de-vecteur-de-symboles-gratuit-vectoriel.jpg" alt="logo" />
            <ul>
                <Link to='/'>
                <li>
                <i class="fas fa-home"></i>
                Home      
                </li>
                </Link>
                <Link to='/movies'>
                <li>
                <i class="fas fa-film"></i>
                Movies
                </li>
                </Link>
                <Link to='/about'>
                <li>
                <i class="far fa-question-circle"></i>
                About
                </li>
                </Link>
            </ul>
        </div>
    )
}
