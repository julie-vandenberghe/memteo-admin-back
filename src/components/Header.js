import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/memteo-logo-base_nega.png';


export const Header = () => {
    return (
        <header>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <nav>
            <ul>
              <li>
                <Link to={`/add`}>Ajouter un meme</Link>
              </li>
            </ul>
          </nav>
        </header>
    )
}
