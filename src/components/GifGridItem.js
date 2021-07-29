import React from 'react'
//puedo recibir props o lo puedo hacer con cada prop por separado
export const GifGridItem = ({id, title,url}) => {
  //  console.log(id,title,url);
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={ url } alt={ title }/>
            <p>{title}</p>
        </div>
    )
}
