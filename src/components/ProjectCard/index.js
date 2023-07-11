import React from 'react'
import { Link } from "react-router-dom";
import './project_card.css'


export default function index({project}) {
    const {url, title, image} = project;
    return (
        <Link to={url} target="_blank" >
            <img src={image} />
            <h2 className="project-title">{title}</h2>
        </Link>
    )
}
