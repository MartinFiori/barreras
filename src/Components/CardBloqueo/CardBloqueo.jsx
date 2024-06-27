import React from "react";
import s from "./CardBloqueo.module.css";
import Button from "../Button/Button";
import Tooltip from "../CustomTooltip/CustomTooltip";

export default function CardBloqueo({
  _id,
  id,
  eventos,
  historial,
  comando_enviado,
  notificacion_activa,
  status,
}) {
  return (
    <section
      key={id}
      className={`${s.card}`}
    >
      <div className="d-flex flex-row justify-content-between">
        <p className="d-flex flex-row gap-2">
          <span className="fw-bold">ID:</span>
          <span>{id}</span>
        </p>
        <div className="d-flex flex-row gap-2 align-items-center">
          <Tooltip
            id={`status-card-bloqueo-${_id}`}
            place="left"
            message={`Estado: ${status ? 'Activo' : 'Inactivo'}`}
          >
            <div className={`${s.dot} ${status ? s.online : s.offline}`}></div>
          </Tooltip>
          <Tooltip
            id={`info-card-bloqueo-${_id}`}
            place="left"
            message='Información'
          >
            <Button className={s.info_btn}>
              <i className="bi bi-info-circle"></i>
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="w-50 d-flex flex-row gap-3">
          <Tooltip
            id={`reset-card-bloqueo-${_id}`}
            place="bottom"
            message='Resetear'
            className="w-100"
          >
            <Button className={s.action_btn}>
              <i className="fw-bold bi bi-arrow-clockwise"></i>
            </Button>
          </Tooltip>
          <Tooltip
            id={`alarm-card-bloqueo-${_id}`}
            place="bottom"
            message='Accionar alarma'
            className="w-100"
          >

            <Button className={s.action_btn}>
              <i className="fw-bold bi bi-bell"></i>
            </Button>
          </Tooltip>
        </div>
        <div className="form-check form-switch">
          <label
            className="form-check-label"
            htmlFor={"flexSwitchCheckDefault" + id}
          >
            Enviar Comando
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            id={"flexSwitchCheckDefault" + id}
          />
        </div>
      </div>
      <div className="d-flex flex-row gap-2 align-items-center">
        <p className={`w-100 d-flex flex-row gap-2 rounded ${s.evento}`}>
          <span className="fw-bold">Eventos:</span> <span>{eventos}</span>
        </p>
        <Button
          className={`${s.historial} d-flex rounded flex-row gap-2 w-50 align-items-center justify-content-center`}
        >
          <i className="bi bi-clock-history"></i>
          <p>Historial</p>
        </Button>
      </div>
    </section >
  );
}
