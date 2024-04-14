import React, { useEffect, useState } from 'react';
import { Header } from './Header.js';

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
      <div className="memes">
        {memes.map(meme => (
          <div className="meme" key={meme._id}>
            <div className="weatherCondition">{meme.name}</div>
            <img className='listMemes' src={meme.link}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListMemes;
