import React from 'react';
import styled from '@emotion/styled'

const Fondo = styled.div`

    background-color: bisque;
    width: 90%;
    margin: 0px auto;
    display: grid;
    justify-content: center;
    align-items: center;
    @media (max-width: 750px) {
        margin: 40px auto;
      }

`


function Clima() {
    return (
        <Fondo>
            <h2>BUsca el clima quee deseas</h2>
        </Fondo>
    )
}

export default Clima
