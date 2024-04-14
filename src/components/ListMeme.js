import React, { useEffect, useState } from 'react';
import { Header } from './Header.js';
import { Link } from 'react-router-dom';
import { MdCreate } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";


const ListMemes = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    getMemes();
  }, []);

  const getMemes = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/memesTest`);
      console.log(response);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des memes");
      }
      const json = await response.json();
      console.log(json);
      // Si votre API retourne un objet avec un attribut 'memes', extrayez-le
      const memesArray = json.memesTest || [];
      setMemes(memesArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Header></Header>
      <h1>Liste des memes</h1>
      <div className="cards">
        {memes.map(meme => (
          <div className="card meme" key={meme._id}>
            <img className='listMemes' src={meme.link}/>
            <div className="text">{meme.name}</div>
            <div className="actions">
              <div className="action"><MdCreate /></div>
              <Link to="/listMemes"><div className="action"><RiDeleteBin5Line /></div></Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListMemes;
