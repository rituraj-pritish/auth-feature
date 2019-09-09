import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
  }

  return (
    <div class='row mt-5'>
      <div class='col-md-6 m-auto'>
        <div class='card card-body'>
          <h1 class='text-center mb-3'>
            <i class='fas fa-user-plus'></i> Register
          </h1>

          <form onSubmit={handleSubmit}>
            <div class='form-group'>
              <label for='name'>Name</label>
              <input
                type='name'
                id='name'
                name='name'
                class='form-control'
                placeholder='Enter Name'
                value={name}
                onChange={handleChange}
              />
            </div>
            <div class='form-group'>
              <label for='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                class='form-control'
                placeholder='Enter Email'
                onChange={handleChange}
                value={email}
              />
            </div>
            <div class='form-group'>
              <label for='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                class='form-control'
                placeholder='Create Password'
                onChange={handleChange}
                value={password}
              />
            </div>
            <div class='form-group'>
              <label for='password2'>Confirm Password</label>
              <input
                type='password'
                id='password2'
                name='password2'
                class='form-control'
                placeholder='Confirm Password'
                onChange={handleChange}
                value={password2}
              />
            </div>
            <button type='submit' class='btn btn-primary btn-block'>
              Register
            </button>
          </form>
          <p class='lead mt-4'>
            Have An Account? <Link to='/auth/login'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
