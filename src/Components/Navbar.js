// src/Components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Sección del logo o espacio para subir una imagen */}
      <div style={styles.leftSection}>
        <label style={styles.logoUpload}>
          <input
            type="file"
            accept="image/*"
            style={styles.fileInput}
            onChange={(e) => console.log("Logo uploaded")}
          />
          <span style={styles.plus}>+</span>
        </label>
      </div>

      {/* Título centrado */}
      <div style={styles.centerSection}>
        <h1 style={styles.title}>AsociaciónHub</h1>
      </div>

      {/* Botón de "Admin Panel" */}
      <div style={styles.rightSection}>
        <button style={styles.adminButton}>Admin Panel</button>
      </div>
    </nav>
  );
};

// Estilos actualizados para el Navbar
const styles = {
  navbar: {
    width: '100%',
    height: '70px',  // Aumentamos ligeramente la altura del Navbar
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',  // Mayor padding horizontal para mejor separación
    borderBottom: '2px solid #ccc',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',  // Sombra para mejor visualización
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logoUpload: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    border: '1px solid #ccc',  // Agrega un borde al área de subida de logo
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  fileInput: {
    display: 'none',
  },
  plus: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#888',  // Color más suave para el símbolo "+"
  },
  centerSection: {
    textAlign: 'center',
    flex: 1,
  },
  title: {
    fontSize: '26px',  // Aumentamos un poco el tamaño de la fuente
    fontWeight: 'bold',
    color: '#333',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  adminButton: {
    padding: '12px 24px',  // Aumentamos el padding del botón para mayor comodidad
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',  // Efecto suave al pasar el ratón
  },
  adminButtonHover: {
    backgroundColor: '#45A049',  // Color al pasar el mouse por encima del botón
  },
};

export default Navbar;
