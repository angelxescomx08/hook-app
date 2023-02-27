import React from 'react';
// import { memo } from 'react';

/**
 * memo sirve para que solo se vuelva a redibujar un componente cuando cambie algo interno de el (no del padre)
 */
export const Small = React.memo(({ value }) => {

    console.log(' Me volví a dibujar :( ');

    return (
        <small>{ value }</small>
    )
})
