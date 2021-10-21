import React, {useEffect, useState} from 'react';

import Clima from "./componentes/Clima"
import Formulario from "./componentes/Formulario"
import styled from "@emotion/styled";

const Titulo = styled.h1`
  color: white;
  text-align: center;
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
`

const Contenedor = styled.div`
  margin-top: 60px;
  background-color: white;
  border-radius: 40px;
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  box-shadow: -20px -10px 53px 2px black;
  padding: 20px;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    height: auto;
    
      }
`

function App() {

  const [datos, setDatos] = useState({
    ciudad:"",
    pais:""
  })

  const [listo, setlisto] = useState(false);

  const [apiDatos, setApiDatos] = useState({})

  const {ciudad, pais} = datos;

  useEffect(() => {

    if (listo) {
      
      const consultarApi = async () => {
          const id = `b51da395b32b57bfdab64ebcadc92239`;
          const url= `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${id}`;
  
          const respuesta = await fetch(url);
          const transformar = await respuesta.json();
  
          setApiDatos(transformar);
          setlisto(false)
  
      }
      
      consultarApi()
    }
 
  }, [listo]);
  
  

  return (
          <div>
            <Titulo>Clima React App</Titulo>
            <Contenedor>
            
                <Formulario setDatos={setDatos} datos={datos} setlisto={setlisto}/>

                <Clima apiDatos={apiDatos} />
   
            </Contenedor>
          </div>
  );
} 

export default App;
