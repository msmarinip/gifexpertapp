import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
//    const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  //  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
  const [categories, setCategories] = useState(['One Punch']);
/*    
    const handleAdd = () =>{
        //con el setCategories cambio las prop de arr y react se entera
        //no recomendable usar categories.push en este caso
        // ...categories es usar el operador spread
        //setCategories(['HunterX',...categories]); lo puedo agregar al inicio 
        setCategories([...categories,'HunterX']);
        //otra manera de agregar categorias:
        //cats, el primera argumento del callback es el estado anterior de la variable
        //y con la fcion de flecha pasa al nuevo estado
        setCategories(cats =>[...cats,'Hulk']);
    } */
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
        {/*<button onClick={handleAdd}>Agregar</button>*/}
        {/**Cuando actualice el setCategories react renderiza el componente nuevamente y  muestra los cambios */}
        {/* .map recorre el arreglo y trae la categoría y el índice*/}
        
        { 
        // li necesita un key, sino da error
        //el key no tiene que ser el índice del arr y tiene que ser único
        //    categories.map( category =>  (<li key={category}>{ category }</li> ))
        categories.map(category =>(
            <GifGrid 
                key = { category }
                category = { category } 
                /> // la category que mando es la que estoy evaluando en este momento
        ))
        
        }
        
        </>
    )
}




