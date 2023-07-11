import React from 'react'
import './portifolio.css'
import Header from '../Header'
import ProjectCard from '../ProjectCard'

import dovetail from'../../assets/dovetail.png';


const projects = [
    {
        image: dovetail,
        title: "Dovetail",
        url: "https://dovetailworkwear.com/"
    },
    {
        image: dovetail,
        title: "Dovetail",
        url: "https://dovetailworkwear.com/"
    }
]


export default function Portifolio() {
    return (
        <>
            <Header title="Header"/>
            {projects.map(project => {
                return (
                    <ProjectCard project={project}/>
                )
            })}
        </>
    )
}
