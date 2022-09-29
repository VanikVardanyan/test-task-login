import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SelectComponent } from "../SelectComponent/SelectComponent";
import "./Navbar.scss";

import groupIcon from "./assets/groupeclipce.svg";

export const Navbar = () => {
  const [changedSize, setChangedSize] = useState(false);
  const [langs, setLangs] = useState("ru");

  const handleSize = (e) => {
    if (e.target.innerWidth <= 620) {
      setChangedSize(true);
    } else {
      setChangedSize(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  if (changedSize) {
    return <SelectComponent />;
  }

  const changeLangHandler = (lng) => {
    setLangs(lng);
  };

  return (
    <header className="navbarContainer">
      <div className="sectionsContainer">
        <section className="logo">LOGO</section>
        <section className="linksContainer">
          <NavLink className="links " to={"/projects"}>
            Проекты
          </NavLink>
          <NavLink className="links" to={"/company"}>
            О компании
          </NavLink>
          <NavLink className="links" to={"/contacts"}>
            Контакты
          </NavLink>
        </section>
        <section className="langsContainer">
          <div className="langContainer">
            <div
              className={langs === "ru" ? "lang active" : "lang"}
              onClick={() => changeLangHandler("ru")}
            >
              RU
            </div>
            <div
              className={langs === "eng" ? "lang active" : "lang"}
              onClick={() => changeLangHandler("eng")}
            >
              EN
            </div>
          </div>
          <div className="iconContainer">
            <img alt="" src={groupIcon} />
          </div>
        </section>
      </div>
    </header>
  );
};
