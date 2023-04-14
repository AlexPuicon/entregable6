import React from 'react';
import LoginForm from '../components/login/LoginForm';

const Login = () => {
  return (
    <div>
      <p>welcome! Enter your email and continue</p>
      <div className="bg-blue-300 w-3/6">
        <h2>Test Data</h2>
        <p>john@gmail.com</p>
        <p>john1234</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
