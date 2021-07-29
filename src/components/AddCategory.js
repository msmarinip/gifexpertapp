import React, { useState } from 'react'
import PropTypes    from 'prop-types'

//rafc
export const AddCategory = ({setCategories}) => {
    //useState primero lo escribo para que lo importe de react pero uso el snipet
    //puedo recibir props AddCategory = (props) y despues llamarlo props.setCategories, o recibir desestructurando como hice {setCategories}
    const [inputValue, setInputValue] = useState(''); // puedo poner por ej useState("Hola Mundo") y aparece escrito en el input al cargar la pág
    
    const handleInputChange = (e) => {
        // e es el event
        //a medida que voy escribiendo en el input, la fcion recibe el e y lo va agregando
        // esto es solo para poder escribir en la caja de texto
        // en cualquier logar donde muestre el inputValue se muestra mientras lo cambio!!
        // ver en <h1>{inputValue}</h1>
        //el inputValue es el último valor actualizado de lo que la persona escribió
        setInputValue(e.target.value)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault(); //para que no refresque toda la pág, que no haga un post
 //       console.log(setCategories);
        if(inputValue.trim().length>2)
        {
            setCategories(cats =>[inputValue,...cats]);
            setInputValue(''); //para que no mande dos veces lo mismo, lo vacío después de agregarlo
        }
        
        
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1> 
            <input
                type="text"
                value={inputValue}
                //tengo que manejar el onChange para porder cambiar el valor inicial.(si no no deja escribir nada en el input)
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
    
}