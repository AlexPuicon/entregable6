import React, { useState } from 'react';

const LoginForm = () => {
  const [toggleType, setToggleType] = useState('password');
  const handleClickType = () => {
    if (toggleType === 'password') setToggleType('text');
    else if (toggleType === 'text') setToggleType('password');
  };
  return (
    <>
      <form>
        <div>
          <label htmlFor="emailId">Email: </label>
          <input type="email" id="emailId" placeholder="example@miemail.com" />
        </div>
        <div>
          <label htmlFor="passwordId">Password: </label>
          <div>
            <input type="text" id="password" />
            <button type="button" onClick={handleClickType}>
              <i class="bx bxs-low-vision"></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
