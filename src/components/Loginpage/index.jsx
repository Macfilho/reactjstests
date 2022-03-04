import React, { useState  }  from "react";

import './styles.css';



const loginPage = () => {
 
 const [usuario, setusuario] =useState("");
 const [password, setpassword] =useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log ("submit", {usuario, password});
  }


  return (
    <div id ="login">
      <h1 classname ="title">Login do sistema</h1>
      <form classname ="form" onSubmit={handlesubmit}>
        <div className="field">
          <label htmlFor="usuario">Usuário</label>
          <input type ="usuario" name="usuario" id="usuario"
          value={usuario}  onChange={(e) => setusuario(e.target.value)}>

          </input>
         
        </div>
        <div className="field">
          <label htmlFor="password">Senha</label>
          <input type ="password" name="password" id="password"
          value={password}  onChange={(e) => setpassword(e.target.value)}>
            
          </input>
        </div>
        <div classname = "actions">
          <button type = "submit">Entrar</button>
        </div>
      </form>

    </div>

  )
   
  };

 export default loginPage ;