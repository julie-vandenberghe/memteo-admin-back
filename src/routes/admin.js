import React, { useEffect, useState } from 'react';
import '../styles/Admin.css';



const Admin = () => {
  const [memes, setMemes] = useState([]);
  const [sounds, setSounds] = useState([]);
  
  //useEffect(() => { getMemes()}, []);
  //useEffect(() => { getSounds()}, [])


  /* Fonction pour récupérer tous les memes */
  const getMemes = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/memes`)
    .then((response) => response.json())
    .then((json) => {
        setMemes(json);
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
  
  return (
    <>
        <div>admin</div>
        <form>
            <select>
                <option value="">--Please choose an option--</option>
                <option value="partly-cloudy">Partly cloudy</option>
            </select>
            <label></label>
            <input/>
        </form>
    </>
  )
}
export default Admin;