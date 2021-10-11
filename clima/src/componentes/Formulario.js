import React from 'react'
import styled from '@emotion/styled';

const BloqueForm = styled.div`
    /* background-color: lightgreen; */
    padding: 20px 20px;
    height: 40vh;
    display: grid;
    align-items: center;
    width: 90%;
    font-size: 30px;
    

    
`

const BlockCampos = styled.div`

  /* background-color: blue; */
  margin: 5px 0px;
  height: 120px;
  display: block;
  width: 100%;
  align-items: center;
  

`

const Label = styled.label`
    
   margin: 20px 0px;
   font-weight: 600;
   letter-spacing: 4px;
   font-family: Arial, Helvetica, sans-serif;
    

`
const Input = styled.input`
    width: 100%;
    margin: 0.8rem 0px 0.5rem 0px;
    padding: 1rem 0px;
    `
const Select = styled.select`
    
    padding: 10px 10px;
    width: 100%;`

const Boton = styled.button`
     background-color: #07448F;
    color: white;
  text-align: center;
  padding: 0.8rem 2.5rem;
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;


  &:hover{

    background-color: white;
    color: #07448F;
 
  }
  
`



function Formulario() {
    return (
      <BloqueForm>
        <form action="">
          <BlockCampos className="block-ciudad">
            <Label htmlFor=""> Ciudad: </Label>
            <Input type="text" placeholder="Ciudad" />
          </BlockCampos>

          <BlockCampos className="block-pais">
            <Label htmlFor="">Pais:</Label>
            <Select name="Ciudad" id="">
              <option value="Argentina">Argentina</option>
              <option value="Estados Unidos">Estados Unidos</option>
            </Select>
          </BlockCampos>
          <Boton type="submit">Buscar Clima</Boton>
        </form>
      </BloqueForm>
    );
}

export default Formulario
