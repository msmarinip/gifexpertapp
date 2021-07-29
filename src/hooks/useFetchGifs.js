

//import React from 'react' si no devuelve jsx no es necesario importar react
//un hook es una función, es standard que comiencen con useXXX, puedo crear uno

import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';
//Crear un custom hook
export const useFetchGifs = (category) => {

//estos hooks pueden tener un estado
//puedo indicarle a otros componentes que lo utilicen cuándo debe  renderizarse porque algo cambia

//const [state, setstate] = useState(initialState) el estado inicial va a ser un objeto, ver l'inea de abajo
const [state, setState] = useState({
    data:[],
    loading: true
}) // cuando se utilice por primera vez el useFetchGifs, tendremos este estado  que carga por defecto
//los Effect no pueden ser async
useEffect(() => {
    //getGifs es una promesa
    getGifs(category)
        .then(imgs =>{

  //          setTimeout(() => {
                console.log(imgs);
                setState({
                    data:imgs, // imgs son los gifs que recibo como argmento en el then
                    loading: false
                    
                });
//            },3000 );
            
        })
},[category])
/*
setTimeout(() => {
    setState({
        data:[1,2,3,4],
        loading: false
    })
}, 3000 ); */
return state; // {data: [], loading:true}

};