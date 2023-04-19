import React, { useState, useEffect } from 'react';
import './App.css';

function RegistrationForm(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [ref, setRef] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const firstNameParam = urlParams.get('name');
    const lastNameParam = urlParams.get('lastname');
    const phoneParam = urlParams.get('phone');
    const refParam = urlParams.get('ref');
    const emailParam = urlParams.get('email');

    if (firstNameParam) {
      setFirstName(firstNameParam);
    }
    if (lastNameParam) {
      setLastName(lastNameParam);
    }
    if (phoneParam) {
      setPhone(phoneParam);
    }
    if (refParam) {
      setRef(refParam);
    }
    if (emailParam) {
      setEmail(emailParam);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      </label>
      <br />
      <label>
        Last Name: 
        <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Ref:
        <input type="text" value={ref} onChange={(event) => setRef(event.target.value)} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default RegistrationForm;
