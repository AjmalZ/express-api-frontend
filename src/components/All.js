/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Loader } from './Loader';
import './All.css';

export const All = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => { // set timeout function with 4000ms or 4s delay
            fetch('https://project-express-api-ixv35r4tfq-lz.a.run.app/music')
                .then((res) => res.json())
                .then((data) => {
                    setList(data.body.topMusicData);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
        }, 3000);
    }, []);
    if (loading) {
        return <Loader />;
    }
    return (
        <div className="allArtists">
            <div className="backLink">
                <NavLink className="backText" to="/">BACK</NavLink>
            </div>

            {list.map((topMusicData) => (
                <ul className="artistList">
                    <li><h3>{topMusicData.artistName}</h3></li>
                    <li><span>Track name: </span>{topMusicData.trackName}</li>
                    <li><span>Genre: </span>{topMusicData.genre}</li>
                    <li><span>Bpm: </span>{topMusicData.bpm}</li>
                    <li><span>Energy: </span>{topMusicData.energy}</li>
                    <li><span>Danceability: </span>{topMusicData.danceability}</li>
                    <li><span>Loudness: </span>{topMusicData.loudness}</li>
                    <li><span>Liveness: </span>{topMusicData.liveness}</li>
                    <li><span>Valence: </span>{topMusicData.valence}</li>
                    <li><span>Length: </span>{topMusicData.length}</li>
                    <li><span>Acousticness: </span>{topMusicData.acousticness}</li>
                    <li><span>Speechiness: </span>{topMusicData.speechiness}</li>
                    <li><span>Popularity: </span>{topMusicData.popularity}</li>
                </ul>
            ))}
        </div>
    );
};