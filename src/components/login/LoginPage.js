import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginPage = ({ history }) => {

  const {dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    const action = {
      type: types.login,
      payload: {
        user: 'nadia'
      }
    }
    dispatch(action);
    history.replace( lastPath );
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
