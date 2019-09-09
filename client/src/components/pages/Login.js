import React,{useState} from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('success');
  };
  return (
    <div className='row mt-5'>
      <div className='col-md-6 m-auto'>
        <div className='card card-body'>
          <h1 className='text-center mb-3'>
            <i className='fas fa-sign-in-alt'></i> Login
          </h1>
          <form onSubmit={handleSubmit} >
            <div className='form-group'>
              <label for='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className='form-control'
                placeholder='Enter Email'
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label for='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                className='form-control'
                placeholder='Enter Password'
                value={password}
                onChange={handleChange}
              />
            </div>
            <button type='submit' className='btn btn-primary btn-block'>
              Login
            </button>
          </form>
          <p className='lead mt-4'>
            No Account? <Link to='/auth/register'>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
