/* eslint-disable indent */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Startpage.css';

export const Startpage = () => {
    return (
        <div className="startPage">
            <h2>Find information about 50 artists</h2>
            <div className="links">
                <p>API:</p>
                <a href="https://project-express-api-ixv35r4tfq-lz.a.run.app" target="_blank" rel="noopener noreferrer">https://project-express-api-ixv35r4tfq-lz.a.run.app</a>
                <p>All ARTISTS INFO:</p>
                <NavLink to="/music">ALL ARTISTS</NavLink>
            </div>
        </div>

    )
}