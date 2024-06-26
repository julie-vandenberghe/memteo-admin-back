import React, { useEffect, useState } from 'react';
import { Header } from './Header.js';
import { MdCreate } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const ListSounds = () => {
  const [sounds, setSounds] = useState([]);

  useEffect(() => {
    getSounds();
  }, []);

  const getSounds = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/soundsTest`);
      console.log(response);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des sons");
      }
      const json = await response.json();
      console.log(json);
      // Si votre API retourne un objet avec un attribut 'sounds', extrayez-le
      const soundsArray = json.soundsTest || [];
      setSounds(soundsArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Header></Header>
      <h1>Liste des sons</h1>
      <div className="cards">
        {sounds.map(sound => (
          <div className="card sound" key={sound._id}>
            <div className="text">{sound.name}</div>
            <audio controls className='listSounds' src={sound.link}></audio>
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

export default ListSounds;
