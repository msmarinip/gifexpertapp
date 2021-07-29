//import React, { useEffect, useState } from 'react'
import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
//    const [count, setCount] = useState(0) //es solo un ejemplo para el btn
  //  const state = useFetchGifs(); voy a desestructurar el obj state, solo necesito loadiing (no la data), ver línea de abajo
  const { data:images, loading} = useFetchGifs(category);
  //cuando pongo : (data:images) estoy renombrando la variable, para tener un nombre que me sirva
    //console.log(data, loading);
   /*  const [images, setImages] = useState([]); // la coleccion por default es un arreglo vacío, no lo uso más acá
    //el useEffect ya no lo uso acá, está en useFetchGifs.js
   useEffect(() =>{
        
        //getGifs retorna una promesa
        getGifs(category)
            .then(imgs => setImages(imgs)) 
            //tengo una funcioón cuyo primer argumento es mandado a la otra (setImages) como único argumento entonces lo puedo escribir así:
       //     .then(setImages) 

        
    },[category])*/
    // el segundo argumento es una lista (arreglo) de dependencia
    // si yo le digo que no tiene ninguna [], se va a cargar una vez
    //aunque apriete muchas veces el btn de abajo
    //solo se ejecuta cuando el componente es rederizado por primera vez
    //pero si la category cambia quiero que lo vuelva a ejecutar, por lo tanto en vez de dejarlo vacío voy a agregar la dependencia [category]


    return (
        <><h3 className=" animate__animated animate__fadeIn">{category}</h3>
        {/*loading ? 'Cargando...' : 'Fin de la carga'*/} 
        {/*si est'a cargando escribe Cargando, caso contrario Fin de la carga
        con && solo evalúo si es true, eso lo uso cuando no me interesa el caso contrario
        */}
        {loading && <p className="animate__animated animate__flash">Loading...</p>} 
         <div className="card-grid">
            
            {//<h3>{count}</h3>
            //<button onClick={() => setCount(count + 1)}>btn</button>
            //*Cada vez que aprieto el botón, se ejecuta todo el componente de nuevo  y vuelve a cargar el https
            // * porque detectó un cambio y hay que actualizar las referencias
            // * y como getGifs (1*) está al mismo nivel lo vuelve a ejecutar
            // * para que no pase, entonces en vez de useState voy a usar useEffect
            // * useEffect me va a permitir ejecutar código de manera condicional
            // 
        }
             
             { // el map lo puedo obtener directamente desestructurando img
             //images.map( ( { id, title } )
             images.map(  img  =>(
                //  <li key = { id }>{ title } </li>
                <GifGridItem 
                    key = {img.id}
                     {...img}
                     />  // mando cada una de las propiedades de la imagen como una propiedad  independiente
                 )
            )}
             
        </div> 
        </>
    )
}



//1)en giphy developers creo el api
//9frPDZiqGzYC3ZQbtypuWSfcMchFMdWb
//api endpoint -> search enpoints copio la url
//api.giphy.com/v1/gifs/search

//2) entro a postman -> create new request (en my workspace), y pego la url de arriba con el api_key
// -> send
//3) para buscar algo, agrego otra key q (query)
// ej q value Rick and Morty
// los parametros que puedo mandar están en  https://developers.giphy.com/docs/api/endpoint#search
//si no quiero muchas imgs -> limit 
// despues de tener la rta en postman, copio el url
// me quedó así api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=9frPDZiqGzYC3ZQbtypuWSfcMchFMdWb


/*
data: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
meta: {status: 200, msg: "OK", response_id: "o76hmip21bkuuex6ogbj017hntzdf9vild952e8r"}
pagination: {total_count: 2066, count: 10, offset: 0}
__proto__: Object
﻿
​
*/