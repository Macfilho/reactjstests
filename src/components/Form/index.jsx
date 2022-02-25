import React, { useState } from "react";
import {
  Container,
  Button,
  TextField,
  
} from "@material-ui/core";

import "./styles.css";
import { useEffect } from "react";


function Form() {

  const [nome, setNome] = useState('');
  const [fone, setFone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCEP] = useState('');
  const [endereco, setendereco]  = useState('');
  const [complemento, setcomplemento] = useState('');
  const [CPFError, setCPFError] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [submitting, setSubimitting] =useState(false)
  
  
  useEffect( () =>{
    if(Object.keys(errors).length === 0 && submitting) {
      sendData();

    }
  })
  async function sendData() {
    const data = JSON.stringify ({...form})
    fetch ('https://jasonplaceholder.typicode.com/posts', {
      method : 'POST',
      headers : new Headers(),
      body:   data 

    }).then( ()=> setForm({formSent:true, nome: '',email: '',fone:''}))
    .catch((err)=>console.log (err))
  }
  
  return (
    <Container maxWidth="sm" component="article" className="form">
      <h1>Cadastro de Clientes</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
       <TextField
          id="nome"
          label="Nome"
          type = "text"
          variant="outlined"
          margin="dense"
          maxlenght = "100"
          minlength = "3"
          fullWidth
          value={nome}
          onChange={(event) => {setNome(event.target.value)}}
        />
         <TextField
          id="cpf"
          label="CPF"
          type ="number"
          variant="outlined"
          margin="dense"
          maxLength='14'
          fullWidth
          error={CPFError}
          helperText={CPFError && "Deve conter 11 dígitos. Insira apenas os números."}
          value={cpf}
          onBlur={(event) => {
            const tmpCPF = event.target.value;

            if (tmpCPF.length !== 11) {
              setCPFError(true);
            } else {
              setCPFError(false);
            }
          }}
          onChange={(event) => {
            const tmpCPF = event.target.value;

            if (tmpCPF.length === 11) {
              setCPFError(false);
            }

            setCpf(event.target.value)}
          }
        />

          <TextField
          id="cep"
          label="CEP"
          type ="number"
          variant="outlined"
          margin="dense"
          maxiLenght = '9'
          fullWidth
          value={cep}
          onChange={(event) => {setCEP(event.target.value)}}
        />
         <TextField
          id="endereco"
          label="Endereço"
          variant="outlined"
          margin="dense"
          fullWidth
          value={endereco}
          onChange={(event) => {setendereco(event.target.value)}}
        />
        <TextField
          id="fone"
          type ="number"
          label="Telefone"
          variant="outlined"
          margin="dense"
          fullWidth
          value={fone}
          onChange={(event) => {setFone(event.target.value)}}
        />
        <TextField
          id="email"
          label="E-mail"
          variant="outlined"
          margin="dense"
          fullWidth
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />
                
        <TextField
          id="complemento"
          label="Complemento"
          variant="outlined"
          margin="dense"
          fullWidth
          value={complemento}
          onChange={(event) => {setcomplemento(event.target.value)}}
        />
        

        <Button className="form-submit" variant="contained" color="primary" >
          Cadastrar
        </Button>
      </form> 

      <p>{nome} {email}</p>
    </Container>
  );
}

export default Form;
