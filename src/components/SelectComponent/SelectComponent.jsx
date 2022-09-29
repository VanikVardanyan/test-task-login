import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SelectComponent.scss";

import marks from "./assets/marks.svg"
import groupIcon from "./assets/groupeclipce.svg"

export const SelectComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="selectContainer">
        <div className="selectWrapper">
          <section className="logo">LOGO</section>
          <section onClick={() => setShow(!show)} className="selectImage">
            <img alt="" src={marks} />
          </section>
        </div>
      </div>
      {show && (
        <div className="selectContainer selectIconCont">
          <section>
            <div className="linksContSelect">
              <NavLink className="links selectlink " to={"/projects"}>
                Проекты
              </NavLink>
              <NavLink className="links selectlink" to={"/company"}>
                О компании
              </NavLink>
              <NavLink className="links selectlink" to={"/contacts"}>
                Контакты
              </NavLink>
            </div>
          </section>
          <section>
            <div className="langContainer">
              <NavLink to={"/ru"} className="lang">
                RU
              </NavLink>
              <NavLink to={"/en"} className="lang">
                EN
              </NavLink>
            </div>
            <div className="iconContainer iconSelect">
              <img alt="" src={groupIcon} />
            </div>
          </section>
        </div>
      )}
    </>
  );
};
