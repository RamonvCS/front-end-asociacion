// src/Pages/HomePage.js
import React from 'react';
import Navbar from '../Components/Navbar';  // Importa el componente Navbar que creaste

const HomePage = () => {
  return (
    <div style={styles.container}>
      {/* Usa el Navbar importado */}
      <Navbar />

      {/* Imagen de fondo */}
      <div style={styles.backgroundImage}>
        <button style={styles.addButton}>+ Background Image</button>
      </div>

      {/* Sección de widgets o contenido */}
      <div style={styles.widgets}>
        <div style={styles.widget}>
          <button style={styles.widgetButton}>+</button>
        </div>
        <div style={styles.widget}>
          <button style={styles.widgetButton}>+</button>
        </div>
        <div style={styles.widget}>
          <button style={styles.widgetButton}>+</button>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <span>Referencias, Social Media, Whats App</span>
        <button style={styles.addButton}>+</button>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backgroundImage: {
    width: '80%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed #ccc',
    margin: '20px 0',
  },
  addButton: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'transparent',
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
  widgets: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
  },
  widget: {
    width: '30%',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed #ccc',
  },
  widgetButton: {
    fontSize: '20px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  footer: {
    width: '80%',
    padding: '20px 0',
    borderTop: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default HomePage;
