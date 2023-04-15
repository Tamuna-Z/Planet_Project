import { useParams } from "react-router-dom";
import Header from "../header/Header";
import{Main} from "./Content.styled";
import React, { useState } from 'react';
// import Info from "../../info/Info";

export default function Content(props:any){
    const {name}=useParams();
    const planets= props.data.find((planet:any) => planet.name === name);
    const [surface, setSurface]=useState(false);
    const[display,setDisplay]=useState<any>(false);
    const[image,setImage]=useState(planets.images.planet);
    const[text,setText]=useState(planets.overview.content);
    return(
        <Main>
            <Header setDisplay ={setDisplay} display ={display}/>

        </Main>

    );
}