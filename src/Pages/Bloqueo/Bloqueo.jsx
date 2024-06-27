import React from "react";
import ListaBloqueos from "../../Components/ListaBloqueos/ListaBloqueos";

const listaBloqueos = [
  {
    "_id": "665a0b784821acf271f0808a",
    id: "RPI_IOT",
    eventos: "Patente AFG034",
    historial: "https://es.wikipedia.org/wiki/Evento",
    comando_enviado: false,
    notificacion_activa: true,
    status: true,
  },
  {
    "_id": "665a0c1d4175fc7eb91a0af2",
    id: "RPL BARRERA",
    eventos: "Patente AE 102 EA",
    historial: "https://es.wikipedia.org/wiki/Evento",
    comando_enviado: true,
    notificacion_activa: false,
    status: false,
  },
  {
    "_id": "665a0d7b4175fc7eb91a0b00",
    id: "RPLLPR",
    eventos: "DNI 58632648",
    historial: "https://es.wikipedia.org/wiki/Evento",
    comando_enviado: false,
    notificacion_activa: true,
    status: true,
  },
  {
    "_id": "665dd53b7487e4c6b9f84535",
    id: "RPI ACCESS CONTROL",
    eventos: "CERRADA",
    historial: "https://es.wikipedia.org/wiki/Evento",
    comando_enviado: true,
    notificacion_activa: false,
    status: false,
  },
  {
    "_id": "66632bf1463403b2dff1b8aa",
    id: "RPLACCESS TRP4",
    eventos: "ABIERTA",
    historial: "https://es.wikipedia.org/wiki/Evento",
    comando_enviado: false,
    notificacion_activa: true,
    status: true,
  },
];

export default function Bloqueo() {
  return <ListaBloqueos listaBloqueos={listaBloqueos} />;
}
