import React, { useState } from "react";
import s from "./Navbar.module.css";
import useCustomQuery from "../../hooks/useCustomQuery";
import jph_logo from "../../assets/jph_logo.png";
import { useGetAllBoards } from "../../services/boards/useGetAllBoards";

export default function Navbar() {
  const [boards, isLoading] = useCustomQuery({ fn: useGetAllBoards, key: "boards" })
  const [selected, setSelected] = useState(null);
  const handleSelect = (board_name) => {
    setSelected(board_name);
  };
  if (isLoading) return <div>Loadinganeshe...</div>;
  return (
    <div className={`${s.navbar}`}>
      <img
        src={jph_logo}
        alt="JPH logo"
        className={s.nav_logo}
      />
      <ul className={`d-flex flex-row gap-1 ${s.boards}`}>
        {boards?.map((board) => (
          <li
            key={board.id}
            onClick={() => handleSelect(board.name)}
            className={selected === board.name ? s.active : ''}
          >
            {board.name}
          </li>
        ))}
      </ul>
      <i className={`bi bi-box-arrow-right ${s.logout_icon}`}></i>
    </div>
  );
}
