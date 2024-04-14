import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Admin from './routes/admin.js';
import Home from './routes/home.js';
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import EditMeme from './components/EditMeme.js';
import ListMemes from './components/ListMeme.js';
import ListSounds from './components/ListSound.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Admin/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/listMemes" element={<ListMemes/>} />
        <Route path="/listSounds" element={<ListSounds/>} />
        <Route path="/add" element={<Admin/>} />
        <Route path="/edit/:id" element={<EditMeme/>} />
        <Route path="*" element={<NotFound/>} /> {/* Si aucune route ne correspond à ce qui est affiché dans l'url, on affiche le composant NotFound */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
