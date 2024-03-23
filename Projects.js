import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function Projects () {
    return (
        <>
        <div><h1>Projects</h1></div>
        <div class="projects">
            <div class="left">
                <p>Eye Movement Animation</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                     <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                     </svg></p>
                <p>Check out my JS skills as you watch the eyes follow your mouse around the screen</p>
                    <p><a href="https://github.com/mswomley/Eye-Movement-Animation"><button className="button1" >View Repo</button></a></p>
            </div>

            <div class="center">
                <p>PacMen Game</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                     <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                    </svg></p>
                <p>In this game, you can add PacMen to the page and watch them bounce around the screen</p>
                    <p><a href="https://github.com/mswomley/PacMen"> <button className="button1" >View Repo</button></a></p>
             </div>     

            <div class="right"> 
                <p>Map Tracker</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
                     </svg></p>
                <p>In this project, you can see my map styling and animation skills</p>
                <p><a href="https://github.com/mswomley/MapAnimation"><button className="button1" >View Repo</button></a></p>  
             </div>
        </div>
        
        </>
    )
}

export default Projects;