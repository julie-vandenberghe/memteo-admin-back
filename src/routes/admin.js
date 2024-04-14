import React, { useEffect, useState } from 'react';
import '../styles/Admin.css';
import { Header } from '../components/Header.js';
import weatherConditionsGroup from '../datas/weatherConditionsGroup';
import {useNavigate} from "react-router-dom";


const Admin = () => {
  const [meme, setMeme] = useState({
    name: "",
    link: ""
});
  const [sounds, setSounds] = useState([]);

  const navigate = useNavigate();


  const [newMeme, setNewMeme] = useState({
    name: "",
    link: ""
  });
  
  //useEffect(() => { getMemes()}, []);
  //useEffect(() => { getSounds()}, [])


  /* Fonction pour récupérer tous les memes */
  const getMemes = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/memes`)
    .then((response) => response.json())
    .then((json) => {
        setMeme(json);
        console.log(json);
    })
  }

  /* Fonction pour récupérer tous les sons */
  const getSounds = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/sounds`)
    .then((response) => response.json())
    .then((json) => {
        setSounds(json);
        console.log(json);
    })
  }

  // Ajouter un meme
  const submit = async (e) => {
    const name = e.target.elements.name.value;
    const link = e.target.elements.link.value;
    console.log(name);

    setNewMeme({
      name,
      link
    });

    const url = `${process.env.REACT_APP_API_URL}/memes`;
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, link })
    });
    if (!response.ok) {
      throw new Error("Echec de l'ajout d'un nouveau meme");
    }
    navigate(`/`);
    } catch (error) {
      console.error("Erreur de l'ajout : ", error);
    }
    
}

  
  return (
    <>
      <Header/>
      <h1>Ajouter un meme</h1>
      <form>
          <label htmlFor="weatherCondition">Choisir une condition météorologique :</label>
          <select name="weatherCondition" required>
              <option value="">--Please choose an option--</option>
              {Object.entries(weatherConditionsGroup).map(([condition, icon]) => ( // Object.entries() permet de convertir l'objet en un tableau de paires [clé, valeur] et map() parcourt ce tableau de paires et créer des options pour chaque paire
                <option key={icon} value={icon}>{condition}</option>
              ))}
          </select>
          <label htmlFor="url">URL du meme :</label>
          <input value={meme.link} type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30" required />
          <button type="submit" onClick={() => submit()}>Ajouter</button>
      </form>
    </>
  )
}
export default Admin;
