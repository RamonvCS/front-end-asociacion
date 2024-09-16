// src/Pages/AssociationPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const AssociationPage = () => {
  const { id } = useParams();  // Obtén el ID de la asociación desde la URL

  return (
    <div>
      <h2>Página de la Asociación {id}</h2>
      {/* Aquí podrías agregar más contenido dinámico */}
    </div>
  );
};

export default AssociationPage;
