import React from "react";
import CardBloqueo from "../CardBloqueo/CardBloqueo";
import SectionTitle from '../SectionTitle/SectionTitle'

export default function ListaBloqueos({ listaBloqueos }) {

  return (
    <SectionTitle title='HBL Bloqueo'>
      {listaBloqueos.map(CardBloqueo)}
    </SectionTitle>
  );
}
