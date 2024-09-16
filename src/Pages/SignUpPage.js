// src/Pages/SignUpPage.js
import React, { useState } from 'react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', formData);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.welcomeMessage}>Bienvenidos a AsociaciónHub</h2>
      <p style={styles.subMessage}>Crea una cuenta para que puedas crear tu página de la asociación.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};

// Estilos con fondo de imagen
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    backgroundImage: 'url("/imgs/signup2.png")', // Correct path to the image
    backgroundSize: 'cover',  // Ensure the image covers the entire background
    backgroundPosition: 'center',  // Center the background image
    backgroundRepeat: 'no-repeat',  // Ensure the image does not repeat
  },
  welcomeMessage: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#fff',  // White text to be visible over the background
  },
  subMessage: {
    fontSize: '16px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#fff',  // White text
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',  // White background for the form
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',  // Slight shadow for depth
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '6px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default SignUpPage;
