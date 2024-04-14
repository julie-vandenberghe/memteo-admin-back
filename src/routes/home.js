import React from 'react'
import { Header } from '../components/Header.js';
import { GoSmiley } from "react-icons/go";
import { IoAddCircle, IoListCircle } from "react-icons/io5";
import { GiMusicalNotes } from "react-icons/gi";
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    <Header></Header>
    <main>
        <div className='cards'>
            <div className='card'>
                <div className='icon'><GoSmiley /></div>
                <div className="actions">
                    <IoAddCircle />
                    <Link to="/listMemes"><IoListCircle /></Link>
                </div>
            </div>
            <div className='card'>
                <div className='icon'><GiMusicalNotes /></div>
                <div className="actions">
                    <IoAddCircle />
                    <Link to="/listSounds"><IoListCircle /></Link>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Home