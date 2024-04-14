import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditMeme = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [meme, setMeme] = useState({
        name: "",
        link: ""
    })

    const [memes, setMemes] = useState([]);


    const getMeme = async (id) => {
        await fetch(`${process.env.REACT_APP_API_URL}/memes/${id}`)
            .then(response => response.json())
            .then(json => {
                setMemes(json);
            });
    }

    useEffect(() => {
        if (id) {
            getMeme(id);
        }
    }, [])

    const handleChange = (key, value) => {
        const copyMeme = { ...meme };
        copyMeme[key] = value;

        setMeme(copyMeme);
    }

    const submit = async () => {
        const method = id ? "PUT" : "POST";
        const url = id ? `${process.env.REACT_APP_API_URL}/memes/${id}` : `${process.env.REACT_APP_API_URL}/memes`;
        
        await fetch(url, {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(meme)
        });

        navigate(`/`);
    }

    return (
        <div className="App">
                <h1>{id ? "Edition d'un meme" : "Ajout d'un meme"}</h1>
                <form>
                    <input value={meme.name} onChange={(e) => handleChange("name", e.target.value)} />
                    
                        <input value={meme.link} onChange={(e) => handleChange("link", e.target.value)} />
                        <button type="submit" onClick={() => submit()}>{id ? "Modifier" : "Ajouter"}</button>
                </form>
        </div>
    )

}

export default EditMeme;