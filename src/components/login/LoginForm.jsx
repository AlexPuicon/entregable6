import React, { useState } from 'react';
import { loginServer } from '../../services/loginServer';

const LoginForm = () => {
  const [toggleType, setToggleType] = useState('password');
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const handleClickType = () => {
    if (toggleType === 'password') setToggleType('text');
    else if (toggleType === 'text') setToggleType('password');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const login = async () => {
    const loginData = await loginServer(loginFormData);
    console.log(loginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="emailId">Email: </label>
          <input
            type="email"
            id="emailId"
            placeholder="example@miemail.com"
            name="email"
            value={loginFormData.email}
            required
          />
        </div>
        <div>
          <label htmlFor="passwordId">Password: </label>
          <div>
            <input
              type={toggleType}
              id="password"
              name="password"
              value={loginFormData.password}
              required
            />
            <button type="button" onClick={handleClickType}>
              <i className="bx bxs-low-vision"></i>
            </button>
          </div>
        </div>
        <button type="sunmit" className="bg-blue-500 p2 rounded-md hover:bg-blue-200">
          Log In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
