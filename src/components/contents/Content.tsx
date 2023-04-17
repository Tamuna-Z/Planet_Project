import { Link, useParams } from "react-router-dom";
import Header from "../header/Header";
import{Main} from "./Content.styled";
import React, { useState } from 'react';
import{Container,Background,Box,TextBox,ImageBox,Text, Image,LinkBox} from "./Content.styled"
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
            <Container>
                {props.data.map((planet:any)=>{
                    return(
                        <Box>
                            <TextBox>
                                <ImageBox color ={planet.color}/>
                                <Text>
                                    <Link 
                                    onClick={(e) =>{
                                        setDisplay(!display);
                                        props.setName(planet.name);
                                        setImage(planet.image.planet);
                                        setSurface(false);
                                        setText(planet.overview.content);
                                        props.setTheme({...props.theme,main:`${planet.color}`});
                                    }}
                                    key={planet.name}
                                    to={"`${planet.name}`"}>
                                        <LinkBox>{planet.name}</LinkBox>
                                    </Link>
                                </Text>
                            </TextBox>
                            {/* <Image source={button}/> */}
                        </Box>
                    )
                })}
            </Container>
            

        </Main>

    );
}