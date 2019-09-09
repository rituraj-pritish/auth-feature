import React from 'react'
import {Link} from 'react-router-dom';

const Form = () => {
  return (
    <div className='row mt-5'>
      <div className='col-md-6 m-auto'>
        <div className='card card-body text-center'>
          <h1><i className='fab fa-node-js fa-2x'/></h1>
          <p>Create an account or login</p>
          <Link to='/auth/register' className='btn btn-primary btn-block mb-2'>Register</Link>
          <Link to='/auth/login' className='btn btn-secondary btn-block'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Form
