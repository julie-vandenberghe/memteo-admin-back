import React from 'react'
import { Header } from '../components/Header.js';
import { GoSmiley } from "react-icons/go";


function Home() {
  return (
    <>
    <Header></Header>
    <main>
        <div className='cards'>
            <div className='card'>
                <div className='icon'><GoSmiley /></div>
                <div className='text'>Ajouter un meme</div>
            </div>
            <div className='card'>
                Liste de tous les memes
            </div>
        </div>
        <div className='cards'>
            <div className='card'>
                Ajouter un son
            </div>
            <div className='card'>
                Liste de tous les sons
            </div>
        </div>
    </main>
    </>
  )
}

export default Home