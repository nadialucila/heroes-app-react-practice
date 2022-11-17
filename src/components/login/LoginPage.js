import React from 'react'

export const LoginPage = ({ history }) => {

  const handleLogin = () => {
    //history.push('/'); //añade el / a la historia
    //cuanda vaya para atras va a poder volver a esta pagina
    history.replace('/'); 
    //con replace, cuando aprete login y quiera volver para atras
    //no va a volver a esta pagina pues fue reemplazada
    //en la historia.
  }

  return (
    <div className='container mt-5'>
        <h1> Login </h1>
        <hr/>

        <button
          className='btn btn-success'
          onClick={ handleLogin }
        >
          Ingresar
        </button>
    </div>
  )
}
