import React from 'react';
import styled from '@emotion/styled'

const Fondo = styled.div`

    /* background-color: bisque; */
    width: 90%;
    margin: 0px auto;
    display: grid;
    justify-content: center;
    text-align: center;
    font-size: 30px;
    align-items: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    @media (max-width: 750px) {
        margin: 40px auto;
      }

`

const Azul = styled.span`
    color: blue;
`


function Clima({apiDatos}) {


    if (!apiDatos.name) return null;

    return (
        <Fondo>
            {apiDatos ?
            
            <div>
                <h2>El clima en {apiDatos.name} es de:</h2>
                <h1> <Azul>{parseInt(apiDatos.main.temp / 10).toFixed(2)} °C</Azul></h1>
                <h3>La máxima esperada es de: <Azul> {parseInt(apiDatos.main.temp_max / 10).toFixed(2)}°C</Azul></h3>
                <h3>La mínima esperada es de: <Azul>{parseInt(apiDatos.main.temp_min / 10).toFixed(2)}°C</Azul></h3>

            </div>
              : null}
            
            
        
        </Fondo>
    )
}

export default Clima

