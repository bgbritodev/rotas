// api link
// sujeitoprogramador.com/rn-api/?api=posts
import React, { useEffect, useState } from 'react';





function App() {
  const [nutri, setNutri] = useState([]);

useEffect(()=>{

  function loadApi(){
    const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
    //fetch é uma função base do javascript que faz requisição
    fetch(url)
    //fetch é uma promisse, entao devolve um .then caso sucesso
    .then((r)=> r.json())
    .then((data) => {
      console.log(data)
      setNutri(data)
    })
  }

  loadApi();

},[]);

  return (
    <div className="container" >
      <header>
        <strong>Nutri</strong>
      </header>
    </div>
  );
}

export default App;
